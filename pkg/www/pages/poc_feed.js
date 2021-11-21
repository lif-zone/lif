'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';
import {Component} from 'react';
import hypercore from 'hypercore';
import crypto from 'hypercore-crypto';
import {toPromises} from 'hypercore-promisifier';
import rai from 'random-access-idb';
import {Buffer} from 'buffer';
import JSON6 from 'json-6';

const str_to_key = str=>{
    return Buffer.from(str, 'hex');
};

const key_to_str = key=>{
    return key.toString('hex');
};

export default class Feeds extends Component {
  state = {};
  componentDidMount(){
    console.log('XXX componentDidMount');
    let feeds = JSON6.parse(localStorage.getItem('lif_feeds')||'{a: []}');
    this.setState({feeds});
  }
  on_new_scroll = async()=>{
    let keyPair = crypto.keyPair();
    let feeds = JSON6.parse(localStorage.getItem('lif_feeds')||'{a: []}');
    let idb = rai('lif_feed_'+key_to_str(keyPair.publicKey));
    console.log('XXX on_new_scroll publicKey public %s secretKey %s',
      key_to_str(keyPair.publicKey), key_to_str(keyPair.secretKey));
    let feed = toPromises(hypercore(filename=>idb(filename),
      keyPair.publicKey, {valueEncoding: 'json',
          storeSecretKey: false,
          secretKey: keyPair.secretKey}));
      await feed.ready();
      feeds.a.push({publicHex: key_to_str(keyPair.publicKey),
        secretHex: key_to_str(keyPair.secretKey)});
      localStorage.setItem('lif_feeds', JSON.stringify(feeds));
      console.log('XXX feed ready');
      this.setState({feeds});
  };
  render(){
    console.log('XXX render');
    let feeds_div = [];
    let feeds = this.state.feeds;
    if (typeof window=='object' && feeds)
    {
      let localStorage  = window.localStorage;
      feeds.a.forEach((f, i)=>{
        feeds_div.push(<div key={i}>
          <a href={'poc_feed?feed='+f.publicHex}>{f.publicHex}</a></div>);
      });
    }
    return (
      <Layout>
        <div className="px-3">
          <h1>POC - Hypercore Feed</h1>
        </div>
      </Layout>
    );
  }
}
