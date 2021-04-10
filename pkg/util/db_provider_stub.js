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
    let idx = 0;
    console.log('XXX db_provider_local.connect stub');
    return {
        find_one: query=>{
            console.log('XXX db_provider_local.find_one stub', sid, query);
            // XXX: use 'query'
            return lines[0];
        },
        find_all: query=>{
            console.log('XXX db_provider_local.find_all stub', sid, query);
            // XXX: use 'query'
            return lines;
        },
        insert: declaration=>{
            console.log('XXX db_provider_local.insert stub', sid, declaration);
            lines.push(declaration);
            DB[sid].updated_at = new Date();
        },
        lock: ()=>{
            console.log('XXX db_provider_local.lock stub', sid);
            return {idx: ++idx};
        },
        unlock: handle=>{
            console.log('XXX db_provider_local.unlock stub', sid, handle);
        },
    };
};

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

E.add_scroll = sid=>{
    if (DB[sid])
        return;
    DB[sid] = {name: sid, documents: [], created_at: new Date(),
        updated_at: new Date()};
};

export default E;
