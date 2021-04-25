// LICENSE_CODE LIF
'use strict';
import crypto from 'hypercore-crypto';
import {Buffer} from 'buffer';

let E = {};

export const str_to_key = str=>{
    return Buffer.from(str, 'hex');
};

export const key_to_str = key=>{
    return key.toString('hex');
};

const store_key = (name, key)=>{
    const raw_key = key_to_str(key);
    if (raw_key)
        localStorage.setItem(`lif_${name}`, raw_key);
};

export const import_keys = ()=>{
    const public_key_raw = localStorage.getItem('lif_public_key');
    const private_key_raw = localStorage.getItem('lif_private_key');
    if (!public_key_raw || !private_key_raw)
        return;
    const public_key = str_to_key(public_key_raw);
    const private_key = str_to_key(private_key_raw);
    if (!public_key || !private_key)
        return;
    return {public_key, private_key};
};

export const sign = (buf, private_key)=>{
    return crypto.sign(buf, private_key).toString('hex');
};

export const generate_keys = ()=>{
    const {publicKey: public_key, secretKey: private_key} = crypto.keyPair();
    return {public_key, private_key};
};

export const generate_and_store_keys = ()=>{
    let {public_key, private_key} = generate_keys();
    store_key('public_key', public_key);
    store_key('private_key', private_key);
};

export default E;
