import {useEffect} from 'react';
import Head from 'next/head';
import etask from '../../util/etask.js';
import Layout from '../components/layout.js';

const create_keys = ()=>etask(function*(){
    const keys = yield window.crypto.subtle.generateKey({
        name: 'RSASSA-PKCS1-v1_5',
        modulusLength: 4096,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: 'SHA-256',
    }, true, ['sign', 'verify']);
    console.log(keys)
});

export default function Home(){
    useEffect(()=>{
        create_keys();
    }, []);
    return (
      <Layout>
          <h1>Wallet</h1>
          <h2>Create wallet</h2>
      </Layout>
    );
}
