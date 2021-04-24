'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import hypercore from 'hypercore';
import rai from 'random-access-idb';

let register_sw = ()=>{
  console.log('register serviceWorker');
  navigator.serviceWorker.register(`/test_sw.js`)
  .then(function(reg){
    console.log('serviceWorker /js/ registered %o', reg);
    console.log('fetch /js/test.js');
    fetch('/js/test.js');
   }).catch(function(err){ console.log('serviceWorker err %o', err); });
};

let hypercore_test = async ()=>{
    console.log('hypercore_test');
    let db = rai('dbname');
    let feed = hypercore(filename=>{
        return db(filename);
    }, {valueEncoding: 'utf-8'})
    await new Promise(res=>feed.on('ready', res));
    console.log('feed length', feed.length);
    console.log('feed key', feed.key.to);
    await new Promise(res=>feed.append('hello '+Math.random(), res));
    await new Promise(res=>feed.append('world '+Math.random(), res));
    console.log('feed length +2', feed.length);
    feed.get(feed.length-2, (err, res)=>{
        console.log(res);
    });
    feed.get(feed.length-1, (err, res)=>{
        console.log(res);
    });
};

export default function Scroll_page(){
  const router = useRouter();
  let content = null;
  useEffect(()=>{
      if (router.query.hypercore)
          hypercore_test();
      else
      {
          register_sw();
          content = <div>
            <script src="/js/hyper-sdk-bundle.js"/>
            <script src='/js/test.js'/>
          </div>
      }
  }, []);
  return (
    <Layout>
      {content}
      <div className="px-3">
        <h3>Test: {router.query.hypercore ? 'hypercore' : 'serviceWorker'}</h3>
        {router.query.hypercore ?
          <a href='test'>serviceWorker test</a>
        :
          <a href='test?hypercore=1'>hypercore test</a>
        }
      </div>
    </Layout>
  );
}
