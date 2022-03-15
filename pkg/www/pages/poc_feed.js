'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';
import {Component} from 'react';
import hypercore from 'hypercore';
import {toPromises} from 'hypercore-promisifier';
import rai from 'random-access-idb';
import JSON6 from 'json-6';
import {Buffer} from 'buffer';
const qs = require('qs');
let qs_o = {};
if (typeof location=='object')
  qs_o = qs.parse(location.search.substr(1));

const str_to_key = str=>{
    return Buffer.from(str, 'hex');
};

function get_feed_key_pair(feed){
    let feeds = JSON6.parse(localStorage.getItem('lif_feeds')||'{a: []}');
    if (!feeds)
      return;
    for (let i=0; i<feeds.a.length; i++)
    {
      if (feeds.a[i].public_hex==feed)
        return feeds.a[i];
    }
}

export default class Feed extends Component {
  state = {value: '{ts: \''+new Date().toLocaleString()+'\'}'};
  async componentDidMount(){
    let feed = qs_o.feed;
    let key_pair = get_feed_key_pair(feed);
    await this.setState({feed, key_pair});
    console.log('key_pair %o', key_pair);
    this.resync();
  }
  on_change = async e=>{
    this.setState({value: e.target.value});
  };
  on_append = async()=>{
    let v = this.state.value, val;
    let key_pair = this.state.key_pair;
    console.log('on_append %s', v);
    try { val = JSON6.parse(v); }
    catch(err){ console.error(err); }
    if (!val)
      this.setState({error: 'invalid json6'});
    else
      this.setState({error: null, val});
    console.log('on_append val %o', val);
    let idb = rai('lif_feed_'+key_pair.public_hex);
    let feed = toPromises(hypercore(filename=>idb(filename),
      str_to_key(key_pair.public_hex), {valueEncoding: 'json',
          storeSecretKey: false,
          secretKey: str_to_key(key_pair.secret_hex)}));
      await feed.ready();
      feed.append(val);
      this.resync();
  };
  resync = async()=>{
    let key_pair = this.state.key_pair;
    let idb = rai('lif_feed_'+key_pair.public_hex);
    let feed = toPromises(hypercore(filename=>idb(filename),
      str_to_key(key_pair.public_hex), {valueEncoding: 'json',
          storeSecretKey: false,
          secretKey: str_to_key(key_pair.secret_hex)}));
      await feed.ready();
    var data = [];
    for (let i=0; i<feed.length; i++)
        data.push(await feed.get(i));
    this.setState({data});
    console.log('len %s', feed.length);
  }
  render(){
    let {feed, key_pair, input_error, data} = this.state;
    if (typeof window=='object')
    {
    }
    return (
      <Layout>
        <div className="px-3">
          <a href="poc_feeds">Feeds</a>
          <h3>Feed: {feed}</h3>
          <p>Secret: {key_pair?.secret_hex}</p>
          <textarea cols={80} value={this.state.value}
            onChange={this.on_change}>
          </textarea>
          <button onClick={this.on_append}>+ Append Data</button>
          {input_error && <b> {input_error}</b>}
        </div>
        <pre>
          {(JSON.stringify(data, null, '\t')||'')
          .replace(/},\n\t{/g, '}, {')}
        </pre>
      </Layout>
    );
  }
}
