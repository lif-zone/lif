'use strict';
const express = require('express');
const morgan = require('morgan');
const zerr = require('../util/zerr.js');
const etask = require('../util/etask.js');
const util = require('../util/util.js');
const lcrypto = require('../util/crypto.js');
const db = require('./db.js');

const insert = (req, res)=>etask(function*(){
    this.on('uncaught', e=>{
        zerr('Error: '+e);
        res.status(400).send('Error: '+e);
    });
    if (!util.is_object(req.body))
        return res.status(400).send('body should be a valid json');
    let {data, signature} = req.body;
    if (!util.is_object(data))
        return res.status(400).send('missing "data" object');
    if (!signature)
        return res.status(400).send('missing "signature"');
    let {type, public_key} = data;
    if (!type || !/^[a-z_]+$/.test(type) || typeof public_key!='string')
        return res.status(400).send('valid type and public_key required');
    if (0) // implement web crypto
    if (!lcrypto.verify_signature(public_key, JSON.stringify(data), signature))
        return res.status(400).send('invalid signature');
    yield db.insert(coll_name, {data, ts: Date.now(), signature});
    res.json({success: 1});
});

const find_all = (req, res)=>etask(function*(){
    this.on('uncaught', e=>{
        zerr(e);
        res.status(400).send(e);
    });
    let {selector, opt} = req.query;
    if (!selector)
        return res.status(400).send('missing selector');
    try {
        selector = JSON.parse(selector);
    } catch(e){ zerr(e);
        return res.status(400).send('invalid selector');
    }
    if (opt)
        opt = JSON.parse(opt);
    let docs = yield db.find_all(coll_name, selector, opt);
    res.json(docs);
});

let find_one = (req, res)=>etask(function*(){
    this.on('uncaught', e=>{
        zerr(e);
        res.status(400).send(e);
    });
    let {selector} = req.query;
    if (!selector)
        return res.status(400).send('missing selector');
    try {
        selector = JSON.parse(selector);
    } catch(e){ zerr(e);
        return res.status(400).send('invalid selector');
    }
    let doc = yield db.find_one(coll_name, selector);
    res.json(doc);
});

const coll_name = 'lif_data';

let init = ()=>{
    const app = express();
    const port = 80;
    app.listen(port, ()=>{
        zerr.notice(`App listening at :${port}`);
    });
    app.use((req, res, next)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    app.use(morgan('tiny'));
    app.use(express.json());
    app.post('/api/insert', insert);
    app.get('/api/find_all', find_all);
    app.get('/api/find_one', find_one);
    app.get('*', (req, res)=>res.status(404).send('not found'));
};

init();
