'use strict'; /*jslint node:true, browser:true, react: true*/
import {useEffect, useState} from 'react';
import axios from 'axios';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';

const ALGORITHM = 'RSA-PSS', HASH = 'SHA-256';
let HOST = 'http://client.lif.zone';

const db_insert = item=>etask(function*(){
    const res = yield axios.post(`${HOST}/api/insert`, item);
    return res.data;
});

const db_find_all = (selector, opt)=>etask(function*(){
    const res = yield axios(`${HOST}/api/find_all`,
        {params: {selector: JSON.stringify(selector)}});
    return res.data;
});

const generate_keys = ()=>etask(function*(){
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

const str2ab = str=>{
    const buf = new ArrayBuffer(str.length);
    const buf_view = new Uint8Array(buf);
    for (let i = 0; i<str.length; i++)
        buf_view[i] = str.charCodeAt(i);
    return buf;
};

const buf2hex = buf=>{
    return Array.prototype.map.call(new Uint8Array(buf),
        x=>('00'+x.toString(16)).slice(-2)).join('');
};

const hex2buf = hex=>{
    let view = new Uint8Array(hex.length/2);
    for (let i = 0; i<hex.length; i+=2)
        view[i>>1] = parseInt(hex.substring(i, i+2), 16);
    return view.buffer;
};

const sign = (data, private_key)=>etask(function*(){
    try {
        const signature = yield window.crypto.subtle.sign(
            {name: ALGORITHM, saltLength: 128}, private_key, data);
        return buf2hex(signature);
    } catch(e){ console.error(e); }
});

const verify = (public_key, signature, data)=>etask(function*(){
    try {
        return yield window.crypto.subtle.verify(
            {name: ALGORITHM, saltLength: 128}, public_key, signature, data);
    } catch(e){ console.error(e); }
});

const key_to_str = key=>etask(function*(){
    try {
        const jwk = yield window.crypto.subtle.exportKey('jwk', key);
        return JSON.stringify(jwk);
    } catch(e){
        console.error(e);
    }
});

const str_to_key = str=>etask(function*(){
    try {
        const json = JSON.parse(str);
        return yield window.crypto.subtle.importKey('jwk', json,
            {name: ALGORITHM, hash: HASH}, true, json.key_ops);
    } catch(e){
        console.error(e);
    }
});

const store_key = (name, key)=>etask(function*(){
    const raw_key = yield key_to_str(key);
    if (raw_key)
        localStorage.setItem(`lif_${name}`, raw_key);
});

const import_keys = ()=>etask(function*(){
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

const Key_editor = ({value, on_save})=>{
    let [new_value, set_new_value] = useState(value);
    let [error, set_error] = useState();
    const on_raw_key_change = e=>{
        set_new_value(e.target.value.trim());
    };
    const save = ()=>etask(function*(){
        const key = yield str_to_key(new_value);
        if (!key)
            return set_error('Invalid key');
        on_save(key);
    });
    return <div className="container">
          <textarea className="w-4/5 h-60 mb-2"
            defaultValue={value}
            placeholder="Enter key (jwk format)"
            onChange={on_raw_key_change}/>
          {error && <div className="text-red-800">{error}</div>}
          <button className="bg-blue-600 hover:bg-blue-800 text-white
            py-1 px-4 rounded" onClick={save}>Save</button>
        </div>;
};

const Keypair = ({keypair, set_keypair})=>{
    let [loading, set_loading] = useState(true);
    let [raw_keypair, set_raw_keypair] = useState();
    let [export_mode, set_export_mode] = useState();
    useEffect(()=>{
        etask(function*(){
            set_keypair(yield import_keys());
            set_loading(false);
        });
    }, []);
    const generate = ()=>{
        etask(function*(){
            set_loading(true);
            let {public_key, private_key} = yield generate_keys();
            yield store_key('public_key', public_key);
            yield store_key('private_key', private_key);
            set_keypair({public_key, private_key});
            set_loading(false);
        });
    };
    const import_manually = ()=>{
        set_raw_keypair({public_key: '', private_key: ''});
        set_export_mode(true);
    };
    const export_keys = ()=>{
        if (export_mode)
        {
            set_raw_keypair(null);
            set_export_mode(false);
            return;
        }
        etask(function*(){
            set_loading(true);
            set_raw_keypair({
                public_key: yield key_to_str(keypair.public_key),
                private_key: yield key_to_str(keypair.private_key),
            });
            set_loading(false);
            set_export_mode(true);
        });
    };
    const save_key = (name, key)=>etask(function*(){
        yield store_key(name, key);
        set_keypair({...keypair, [name]: key});
        set_raw_keypair({...raw_keypair,
            [name]: yield key_to_str(key),
        });
    });
    if (loading)
        return <span>loading...</span>;
    let expand;
    if (export_mode && raw_keypair)
    {
        expand = <div className="flex">
              <div className="flex-1">
                Public key (jwk format)<br/>
                <Key_editor value={raw_keypair.public_key}
                  on_save={key=>save_key('public_key', key)}/>
              </div>
              <div className="flex-1">
                Private key (jwk format)<br/>
                <Key_editor value={raw_keypair.private_key}
                  on_save={key=>save_key('private_key', key)}/>
              </div>
            </div>;
    }
    else if (!keypair)
    {
        return <span>
              No keys found in local storage.{' '}
              <a onClick={generate}>Generate new keypair</a>{' '}
              or <a onClick={import_manually}>Import existing keys</a>.
            </span>;
    }
    return <span>
          <div className="mb-2">
            <a onClick={export_keys}>{export_mode ? 'Hide' : 'Show'} keys</a>
          </div>
          {expand}
        </span>;
};

const Create_user = ({keypair})=>{
    const [loading, set_loading] = useState();
    const [error, set_error] = useState();
    const [result, set_result] = useState();
    const [inputs, set_inputs] = useState({});
    const on_change = name=>e=>{
        set_inputs({...inputs, [name]: e.target.value});
    };
    if (!keypair || !keypair.public_key || !keypair.private_key)
        return <div>Public and private keys are required.</div>;
    const submit = event=>etask(function*(){
        event.preventDefault();
        set_error();
        set_result();
        if (!inputs.uid || !/^[0-9a-z._-]+$/.test(inputs.uid))
            return set_error('Invalid UID login');
        try {
            const public_key = yield key_to_str(keypair.public_key);
            const data = {...inputs, type: 'passport', public_key};
            const signature = yield sign(str2ab(JSON.stringify(data)),
                keypair.private_key);
            if (!signature)
                return set_error('Error: Couldn\'t sign the data');
            set_loading(true);
            const res = yield db_insert({data, signature});
            if (res.success)
                set_result(`Identity "${inputs.uid}" added!`);
        } catch(e){
            set_error('Something went wrong');
        }
        set_loading(false);
    });
    return <div className="mt-8 max-w-md">
            <form className="grid grid-cols-1 gap-2" onSubmit={submit}>
              <label className="block">
                <span className="text-gray-700">UID login</span>
                <input type="text"
                  className="mt-1 block w-full rounded-md border-gray-300
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="josh.d" value={inputs.uid||''}
                  onChange={on_change('uid')}/>
              </label>
              <label className="block">
                <span className="text-gray-700">First name</span>
                <input type="text"
                  className="mt-1 block w-full rounded-md border-gray-300
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Josh" value={inputs.first_name||''}
                  onChange={on_change('first_name')}/>
              </label>
              <label className="block">
                <span className="text-gray-700">Second name</span>
                <input type="text"
                  className="mt-1 block w-full rounded-md border-gray-300
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Doe" value={inputs.last_name||''}
                  onChange={on_change('last_name')}/>
              </label>
              {error && <div className="text-red-800">{error}</div>}
              {!loading && <button type="submit" className="bg-blue-600
                  hover:bg-blue-800 text-white py-1 px-4 rounded">
                  Submit</button>}
              {result && <div className="text-green-800">{result}</div>}
            </form>
          </div>;
};

const Verify_user = ({public_key})=>{
    const [loading, set_loading] = useState();
    const [error, set_error] = useState();
    const [result, set_result] = useState();
    const [inputs, set_inputs] = useState({});
    const on_change = name=>e=>{
        set_inputs({...inputs, [name]: e.target.value});
    };
    if (!public_key)
        return <div>Public key is required to verify identity.</div>;
    const submit = event=>etask(function*(){
        event.preventDefault();
        set_error();
        set_result();
        if (!inputs.uid || !/^[a-z._-]+$/.test(inputs.uid))
            return set_error('Invalid UID login');
        try {
            set_loading(true);
            const items = yield db_find_all({'data.type': 'passport',
                'data.uid': inputs.uid});
            let summary = [], valid = 0;
            summary.push(`${items.length} records found`);
            let curr;
            for (let item of items)
            {
                let {data, signature, ts} = item;
                if (!data.public_key || !signature)
                    continue;
                let item_public_key = yield str_to_key(data.public_key);
                if (!item_public_key)
                    continue;
                let item_signature = hex2buf(signature);
                let item_data = str2ab(JSON.stringify(data));
                let is_valid = yield verify(item_public_key, item_signature,
                    item_data);
                if (!is_valid)
                    continue;
                valid++;
                // first passport is the valid one
                if (!curr || ts<curr.ts)
                    curr = item;
            }
            if (items.length)
                summary.push(`${valid} of them valid`);
            const public_key_raw = yield key_to_str(public_key);
            if (curr && curr.data.public_key==public_key_raw)
                summary.push(`the ID "${inputs.uid}" is yours`);
            else
                summary.push(`the ID "${inputs.uid}" doesn't belong to you`);
            set_result(summary.join('\n'));
        } catch(e){
            set_error('Something went wrong');
            console.error(e);
        }
        set_loading(false);
    });
    return <div className="mt-8 max-w-md">
            <form className="grid grid-cols-1 gap-2" onSubmit={submit}>
              <label className="block">
                <span className="text-gray-700">UID login</span>
                <input type="text"
                  className="mt-1 block w-full rounded-md border-gray-300
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="josh.d" value={inputs.uid||''}
                  onChange={on_change('uid')}/>
              </label>
              {error && <div className="text-red-800">{error}</div>}
              {!loading && <button type="submit" className="bg-blue-600
                  hover:bg-blue-800 text-white py-1 px-4 rounded">
                  Verify</button>}
              {result && <div className="text-blue-800 whitespace-pre">
                  {result}</div>}
            </form>
          </div>;
};

const Server = ({host, set_host})=>{
    return <div className="max-w-md">
            <form className="grid grid-cols-1 gap-2">
              <label className="block">
                <input type="text"
                  className="block w-full rounded-md border-gray-300
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="http://client.lif.zone" value={host}
                  onChange={e=>set_host(e.target.value)}/>
              </label>
            </form>
          </div>;
};

export default function Home(){
    let [keypair, set_keypair] = useState();
    let [host, set_host] = useState('http://client-b.lif.zone');
    // tmp hack
    useEffect(()=>{ HOST = host; }, [host]);
    return (
      <Layout>
          <h1>LIF Wallet</h1>
          <div className="container mb-4">
            <h3>Server</h3>
            <Server host={host} set_host={set_host}/>
          </div>
          <div className="container mb-4">
            <h3>Your keypair</h3>
            <Keypair keypair={keypair} set_keypair={set_keypair}/>
          </div>
          <div className="container mb-4">
            <h3>Verify account</h3>
            <Verify_user public_key={keypair && keypair.public_key}/>
          </div>
          <div className="container mb-4">
            <h3>Create account</h3>
            <Create_user keypair={keypair}/>
          </div>
      </Layout>
    );
}
