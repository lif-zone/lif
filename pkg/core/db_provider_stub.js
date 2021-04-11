// LICENSE_CODE LIF
'use strict';

let E = {};
let DB = {};

E.connect = sid=>{
    if (!DB[sid])
    {
        DB[sid] = {name: sid, documents: [], created_at: new Date(),
            updated_at: new Date()};
    }
    let lines = DB[sid].documents;
    console.log('XXX db_provider_local.connect stub');
    return {
        find_one(query){
            console.log('XXX db_provider_local.find_one stub', sid, query);
            // XXX: use 'query'
            return lines[0];
        },
        find_all(query){
            console.log('XXX db_provider_local.find_all stub', sid, query);
            // XXX: use 'query'
            return lines;
        },
        count(query){
            // XXX: use 'query'
            console.log('XXX db_provider_local.find_all count', sid, query);
            return lines.length;
        }
        insert(declaration){
            console.log('XXX db_provider_local.insert stub', sid, declaration);
            lines.push(declaration);
            DB[sid].updated_at = new Date();
        },
        async get_last_decl(){
            return lines[lines.length-1];
        },
        async lock(){
            console.log('XXX db_provider_local.lock stub', sid);
            const last_decl = await this.get_last_decl();
            const prev_sig = last_decl && last_decl.sig;
            const idx = last_decl ? last_decl.meta.idx+1 : 1;
            return {idx, prev_sig};
        },
        unlock(handle){
            console.log('XXX db_provider_local.unlock stub', sid, handle);
        },
        close(handle){},
    };
};

// for wallet UI only
E.get_all_scrolls = ()=>{
    console.log('XXX db_provider_local.get_all_scrolls stub');
    let scrolls = [];
    for (let sid in DB)
    {
        let scroll = DB[sid];
        scrolls.push({name: sid, length: scroll.documents.length,
            created_at: scroll.created_at, updated_at: scroll.updated_at});
    }
    return scrolls;
};

// for wallet UI only
E.add_scroll = sid=>{
    if (DB[sid])
        return;
    DB[sid] = {name: sid, documents: [], created_at: new Date(),
        updated_at: new Date()};
};

export default E;
