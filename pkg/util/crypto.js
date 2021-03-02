// LICENSE_CODE LIF
'use strict';
const crypto = require('crypto');

let E = module.exports;

E.verify_signature = (public_key, input, signature)=>{
    const verifier = crypto.createVerify('SHA256');
    verifier.update(input, 'ascii');
    const public_buf = Buffer.from(public_key, 'ascii');
    const sign_buf = Buffer.from(signature, 'hex');
    return verifier.verify(public_buf, sign_buf);
};
