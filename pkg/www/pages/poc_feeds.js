'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';
import {Component} from 'react';
import hypercore from 'hypercore';
import crypto from 'hypercore-crypto';
import {toPromises} from 'hypercore-promisifier';
import rai from 'random-access-idb';
import JSON6 from 'json-6';

const key_to_str = key=>{
    return key.toString('hex');
};

export default class Feeds extends Component {
  state = {};
  componentDidMount(){
    let feeds = JSON6.parse(localStorage.getItem('lif_feeds')||'{a: []}');
    this.setState({feeds});
  }
  on_new_scroll = async()=>{
    let keyPair = crypto.keyPair();
    let feeds = JSON6.parse(localStorage.getItem('lif_feeds')||'{a: []}');
    let idb = rai('lif_feed_'+key_to_str(keyPair.publicKey));
    let feed = toPromises(hypercore(filename=>idb(filename),
      keyPair.publicKey, {valueEncoding: 'json',
          storeSecretKey: false,
          secretKey: keyPair.secretKey}));
      await feed.ready();
      feeds.a.push({public_hex: key_to_str(keyPair.publicKey),
        secret_hex: key_to_str(keyPair.secretKey)});
      localStorage.setItem('lif_feeds', JSON.stringify(feeds));
      this.setState({feeds});
  };
  render(){
    let feeds_div = [];
    let feeds = this.state.feeds;
    if (typeof window=='object' && feeds)
    {
      feeds.a.forEach((f, i)=>{
        feeds_div.push(<div key={i}>
          <a href={'poc_feed?feed='+f.public_hex}>{f.public_hex}</a></div>);
      });
    }
    return (
      <Layout>
        <div className="px-3">
          <h1>POC - Hypercore Feeds</h1>
          <button onClick={this.on_new_scroll}>+ New local feed</button>
        </div>
        <div className="px-3"><h3>My Local Feeds:</h3>{feeds_div}</div>
      </Layout>
    );
  }
}
