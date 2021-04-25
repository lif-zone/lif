// LICENSE_CODE LIF
'use strict';
import date from '../util/date.js';
import {sign, key_to_str, str_to_key} from './wallet.js';
import crypto from 'hypercore-crypto';
import {toPromises} from 'hypercore-promisifier';
import hypercore from 'hypercore';
import rai from 'random-access-idb';

let E = {};

class Scroll {
    constructor(feed){
        this.feed = feed;
    }
    async decl(data, blob){
        const decl = {meta: {idx: this.feed.length, ts: E.ts()}};
        if (data)
            decl.data = data;
        if (blob)
            decl.meta.blob = blob;
        await this.feed.append(decl);
    }
    async get(index){
        return await this.feed.get(index);
    }
    async find_all(query){
        // XXX: use 'query'
        let declarations = [];
        for (let i=0; i<this.feed.length; i++)
            declarations.push(await this.feed.get(i));
        return declarations;
    }
    get_length(){
        return this.feed.length;
    }
    close(){
        this.feed.close();
    }
}

// for wallet UI only: store user's scrolls in localStorage as name=>keypair
let save_my_scroll = (name, keypair)=>{
    let json = localStorage.getItem('lif_my_scrolls');
    let my_scrolls = json ? JSON.parse(json) : [];
    my_scrolls.push({public_key: key_to_str(keypair.public_key),
        private_key: key_to_str(keypair.private_key)});
    localStorage.setItem('lif_my_scrolls', JSON.stringify(my_scrolls));
};

// for wallet UI only
E.get_all_scrolls = async ()=>{
    let json = localStorage.getItem('lif_my_scrolls');
    let my_scrolls = json ? JSON.parse(json) : [];
    let scrolls = [];
    for (let s of my_scrolls)
    {
        let {public_key, private_key} = s;
        let keypair = {public_key: str_to_key(public_key),
            private_key: str_to_key(private_key)};
        let scroll = await E.open_write(keypair);
        let length = scroll.get_length();
        let info = {length, public_key};
        if (length)
        {
            let first_decl = await scroll.get(0);
            info.created_at = first_decl && first_decl.meta &&
                first_decl.meta.ts;
            info.name = first_decl && first_decl.data &&
                first_decl.data.author && first_decl.data.author.name;
            let last_decl = await scroll.get(length-1);
            info.updated_at = last_decl && last_decl.meta &&
                last_decl.meta.ts;
        }
        scrolls.push(info);
    }
    return scrolls.sort((a, b)=>a.updated_at<b.updated_at ? 1 : -1);
};

// for wallet UI only
E.find_my_scroll_keypair = public_key_str=>{
    let json = localStorage.getItem('lif_my_scrolls');
    let my_scrolls = json ? JSON.parse(json) : [];
    for (let s of my_scrolls)
    {
        let {public_key, private_key} = s;
        if (public_key!=public_key_str)
            continue;
        return {public_key: str_to_key(public_key),
            private_key: str_to_key(private_key)};
    }
};

E.open_write = async scroll_keypair=>{
    let idb = rai('lif_'+key_to_str(scroll_keypair.public_key));
    let feed = toPromises(hypercore(filename=>{
        return idb(filename);
    }, scroll_keypair.public_key, {
        valueEncoding: 'json',
        storeSecretKey: false,
        secretKey: scroll_keypair.private_key,
    }));
    await feed.ready();
    return new Scroll(feed);
};

E.open_read = async public_key=>{
    if (typeof public_key=='string')
        public_key = str_to_key(public_key, 'hex');
    let idb = rai('lif_'+key_to_str(public_key));
    let feed = toPromises(hypercore(filename=>{
        return idb(filename);
    }, public_key, {
        valueEncoding: 'json',
        storeSecretKey: false,
    }));
    await feed.ready();
    return new Scroll(feed, name);
};

E.create = async (name, wallet_keypair)=>{
    const {publicKey: public_key, secretKey: private_key} = crypto.keyPair();
    let master_scroll = await E.open_write(wallet_keypair);
    let scroll = await E.open_write({public_key, private_key});
    let name_sig = sign(Buffer.from(name), wallet_keypair.private_key);
    let first_decl = {
        author: {name, pub: key_to_str(wallet_keypair.public_key),
            sig: name_sig},
    };
    await scroll.decl(first_decl);
    save_my_scroll(name, {public_key, private_key});
    return scroll;
};

E.ts = function(){
  // XXX: need monotonic and high precision
  return date.to_sql_ms();
};

export default E;
