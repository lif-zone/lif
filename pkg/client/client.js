'use strict';
const crypto = require('crypto');
const etask = require('../util/etask.js');
const axios = require('axios');
const lcrypto = require('../util/crypto.js');
let E = module.exports;

const sign = (input, private_key)=>{
    const _sign = crypto.createSign('SHA256');
    _sign.update(input);
    _sign.end();
    return _sign.sign(private_key, 'hex');
};

class LifDB {
    init(opt){
	this.public_key = opt.public_key;
	this.private_key = opt.private_key;
    }
    uninit(opt){} // XXX antonp: need disconnect mongo connection
    connect(){
        this.host = process.argv[2]||'http://localhost:3101';
    }
    insert_raw(item){
        let _this = this;
        return etask(function*(){
            return yield axios.post(`${_this.host}/api/insert`, item);
        });
    }
    insert(data){
	const signature = sign(JSON.stringify(data), this.private_key);
	return this.insert_raw({data, signature});
    }
    find_all(selector, opt){
        let _this = this;
        return etask(function*(){
            let res = yield axios(`${_this.host}/api/find_all`,
                {params: {selector: JSON.stringify(selector)}});
            return res.data;
        });
    }
}

E.LifDB = LifDB;
