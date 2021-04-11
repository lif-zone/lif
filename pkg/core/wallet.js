// LICENSE_CODE LIF
'use strict';
import etask from '../util/etask.js';
import zutil from '../util/util.js';

const ALGORITHM = 'RSA-PSS', HASH = 'SHA-256';
let E = {};

const str_to_key = str=>etask(function*(){
    try {
        const json = JSON.parse(str);
        return yield window.crypto.subtle.importKey('jwk', json,
            {name: ALGORITHM, hash: HASH}, true, json.key_ops);
    } catch(e){
        console.error(e);
    }
});

export const key_to_str = key=>etask(function*(){
    try {
        const jwk = yield window.crypto.subtle.exportKey('jwk', key);
        return JSON.stringify(jwk);
    } catch(e){
        console.error(e);
    }
});

const store_key = (name, key)=>etask(function*(){
    const raw_key = yield key_to_str(key);
    if (raw_key)
        localStorage.setItem(`lif_${name}`, raw_key);
});

export const import_keys = ()=>etask(function*(){
    const public_key_raw = localStorage.getItem('lif_public_key');
    const private_key_raw = localStorage.getItem('lif_private_key');
    if (!public_key_raw || !private_key_raw)
        return;
    const public_key = yield str_to_key(public_key_raw);
    const private_key = yield str_to_key(private_key_raw);
    if (!public_key || !private_key)
        return;
    return {public_key, private_key};
});

export const sign = (buf, private_key)=>etask(function*(){
    try {
        const signature = yield window.crypto.subtle.sign(
            {name: ALGORITHM, saltLength: 128}, private_key, buf);
        return zutil.buf2hex(signature);
    } catch(e){ console.error(e); }
});

export const generate_keys = ()=>etask(function*(){
    try {
        const keys = yield window.crypto.subtle.generateKey({
            name: ALGORITHM,
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: HASH,
        }, true, ['sign', 'verify']);
        return {public_key: keys.publicKey, private_key: keys.privateKey};
    } catch(e){ console.error(e); }
});

export const generate_and_store_keys = ()=>etask(function*(){
    let {public_key, private_key} = yield generate_keys();
    yield store_key('public_key', public_key);
    yield store_key('private_key', private_key);
});

export default E;
