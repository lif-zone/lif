// LICENSE_CODE LIF
'use strict';
import {openDB} from 'idb';

let E = {};

const STORE = 'declarations';
E.connect = async sid=>{
    const db = await openDB('lif_db_'+sid, 4, {
        upgrade(upgrade_db){
            if (upgrade_db.objectStoreNames.contains(STORE))
                return;
            const store = upgrade_db.createObjectStore(STORE, {
                autoIncrement: true,
            });
            store.createIndex('idx', 'meta.idx');
        },
    });
    return {
        async find_one(query){
            // XXX: use 'query'
            return this.get_last_decl();
        },
        async find_all(query){
            // XXX: use 'query'
            return (await db.getAllFromIndex(STORE, 'idx')).reverse();
        },
        async count(query){
            // XXX: use 'query'
            return await db.count(STORE);
        },
        async insert(declaration){
            const tx = db.transaction(STORE, 'readwrite');
            const store = tx.objectStore(STORE);
            store.add(declaration);
            await tx.complete;
        },
        async get_last_decl(){
            const tx = db.transaction(STORE, 'readonly');
            const store = tx.objectStore(STORE);
            let cursor = await store.index('idx').openCursor(null, 'prev');
            await tx.complete;
            return cursor && cursor.value;
        },
        async lock(){
            const last_decl = await this.get_last_decl();
            const prev_sig = last_decl && last_decl.sig;
            const idx = last_decl ? last_decl.meta.idx+1 : 0;
            return {idx, prev_sig};
        },
        unlock(handle){},
        async close(){
            await db.close();
        }
    };
};

// for wallet UI only
E.get_all_scrolls = async ()=>{
    const dbs = await window.indexedDB.databases();
    let scrolls = [];
    for (let db of dbs)
    {
        let res = /^lif_db_(.+)$/.exec(db.name);
        if (!res)
            continue;
        let name = res[1];
        let conn = await E.connect(name);
        let length = await conn.count();
        let last_decl = await conn.get_last_decl();
        let updated_at = last_decl && last_decl.meta && last_decl.meta.ts;
        scrolls.push({name, length, updated_at});
    }
    return scrolls.sort((a, b)=>a.updated_at<b.updated_at ? 1 : -1);
};

// for wallet UI only
E.add_scroll = async sid=>{
    let conn = await E.connect(sid);
    await conn.close();
};

export default E;
