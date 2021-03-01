'use strict';
const crypto = require('crypto');
const axios = require('axios');
const etask = require('./util/etask.js');
const zerr = require('./util/zerr.js');
const lcrypto = require('./util/crypto.js');

let host = 'http://localhost:3101';

class LifDB {
    connect(){
        this.host = process.argv[2]||'http://localhost:3101';
    }
    insert(item){
        let _this = this;
        return etask(function*(){
            return yield axios.post(`${_this.host}/api/insert`, item);
        });
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

const generate_keys = ()=>{
    const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {type: 'pkcs1', format: 'pem'},
        privateKeyEncoding: {type: 'pkcs1', format: 'pem'},
    });
    return {private_key: privateKey, public_key: publicKey};
};

const sign = (input, private_key)=>{
    const _sign = crypto.createSign('SHA256');
    _sign.update(input);
    _sign.end();
    return _sign.sign(private_key, 'hex');
};

const publish_passport = (uid, {public_key, private_key})=>etask(function*(){
    this.on('uncaught', e=>zerr('Error: '+e));
    const ldb = new LifDB();
    yield ldb.connect();
    const data = {type: 'passport', public_key, uid, first_name: 'John',
        last_name: 'Doe'};
    const signature = sign(JSON.stringify(data), private_key);
    let res = yield ldb.insert({data, signature});
    zerr.notice('publish_passport: %s', res.data.success ? 'success' : 'fail');
});

const validate_passport = (uid, public_key)=>etask(function*(){
    this.on('uncaught', e=>zerr('Error: '+e));
    const ldb = new LifDB();
    yield ldb.connect();
    let items = yield ldb.find_all({'data.type': 'passport', 'data.uid': uid});
    let curr;
    for (let item of items)
    {
        let {data, signature, ts} = item;
        if (!data.public_key || !signature)
            continue;
        if (!lcrypto.verify_signature(data.public_key, JSON.stringify(data),
            signature))
        {
            continue;
        }
        // latest passport is the valid one
        if (!curr || ts>curr.ts)
            curr = item;
    }
    if (!curr)
        return false;
    return lcrypto.verify_signature(public_key, JSON.stringify(curr.data),
        curr.signature);
});

const run = ()=>etask(function*(){
    if (process.argv[2])
        host = process.argv[2];
    zerr.notice('server host: %s', host);
    const {private_key, public_key} = generate_keys();
    yield publish_passport('josh', {private_key, public_key});
    const is_valid = yield validate_passport('josh', public_key);
    zerr.notice('validate_passport: %s', is_valid ? 'success' : 'fail');
});
run();
