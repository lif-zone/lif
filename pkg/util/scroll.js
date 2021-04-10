// LICENSE_CODE LIF
'use strict';
import zutil from './util.js';
import {sign, key_to_str} from './wallet.js';

let E = {};

class Scroll {
    constructor(conn, sid){
        this.conn = conn;
        this.sid = sid;
    }
    async decl(keypair, data, blob){
        const idx = await this.conn.lock();
        const meta = {idx, ts: E.ts(),
            public_key: await key_to_str(keypair.public_key)};
        if (blob) // XXX: use base64 instead
            meta.blob = zutil.buf2hex(blob);
        let str_to_sign = JSON.stringify(meta)+JSON.stringify(data);
        const sig = await sign(zutil.str2ab(str_to_sign), keypair.private_key);
        await this.conn.insert({sig, meta, data});
        await this.conn.unlock();
    }
    find_one(query){
        return this.conn.find_one(query);
    }
    find_all(query){
        return this.conn.find_all(query);
    }
    close(){}
}

E.open = async (impl, sid)=>{
    let conn = await impl.connect(sid);
    return new Scroll(conn, sid);
};

E.ts = function(){
  // XXX: need monotonic and high precision
  return Date.now();
};

export default E;
