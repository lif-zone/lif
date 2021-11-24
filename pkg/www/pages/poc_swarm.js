'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';
import {Component} from 'react';
import {DebugButton} from '../components/common.js';
const Hyperswarm = require('hyperswarm-web');
const date = require('../../util/date.js');
const sprintf = require('../../util/sprintf.js');

const WSS1 = 'wss://geut-webrtc-signal-v3.herokuapp.com';
const WSS2 = 'wss://signal.dat-web.eu';
const WSS3 = 'wss://geut-webrtc-signal-v3.glitch.me';

let console_log = [], MAX_LOG = 10000;
// XXX: move to generic place
if (typeof window=='object')
{
  window.console_log = console_log;
  function overload(o){
    let fn = o.fn, args = Array.from(o.args);
    let args0 = args[0] = date.to_sql_ms()+ ' '+args[0];
    args[0] = args[0].replace(/%c/g, '%C');
    args[0] = args[0].replace(/%o/g, '%O');
    console_log.push(sprintf.apply(null, args));
    if (console_log.length > MAX_LOG)
        console_log = console_log.slice(MAX_LOG/2);
    args[0] = args0;
    return fn.apply(console, args);
  }
  window.console_overload = {debug: overload, info: overload,
    log: overload, warn: overload, error: overload};
}

export default class Swarm extends Component {
  state = {peer_name: ''+parseInt(Math.random()*100000)};
  wss = WSS1;
  _log = [];
  log(s){
    this._log.push(date.to_sql_ms()+' '+s);
    console.log(s);
    this.setState({force_render: Date.now()});
  }
  async start_swarm(){
    let conn_id = 0, wss = this.wss;
    // XXX allow to select from UI
    // wss://signal.dat-web.eu, wss://geut-webrtc-signal-v3.glitch.me
    this.log('swarm bootstrap '+(wss ? wss :
      'default: '+WSS1+', '+WSS2+', '+WSS3));
    const swarm_web = Hyperswarm({
      bootstrap: wss ? [wss] : undefined});
    swarm_web.on('connection', (socket, info)=>{
      conn_id++;
      let id = conn_id;
      this.log('conn #'+id+': NEW  type '+info.type+' peer '+
        JSON.stringify(info.peer));
      socket.on('data', data=>{
        this.log('conn #'+id+': GOT_DATA '+data.toString());
      });
      socket.write(date.to_sql_ms()+ ' hello from '+this.state.peer_name);
    });
    const topic = Buffer.alloc(32).fill('hello world');
    this.log('join swarm');
    swarm_web.join(topic, {announce: true, lookup: true});
  }
  on_wss = e=>(this.wss = e.target.value);
  on_click = ()=>this.start_swarm();
  on_peer_name = e=>this.setState({peer_name: e.target.value});
  on_copy_log = ()=>navigator.clipboard.writeText(
    console_log.join('\n'));
  render_debug = ()=>{
    return <div>
      <p>
        <button onClick={this.on_copy_log}>Copy</button>
      </p>
      <pre style={{fontSize: '13px'}}>{console_log.join('\n')}</pre>
    </div>;
  }
  render(){
    let {peer_name} = this.state;
    return (
      <Layout>
        <div className="px-3">
          <DebugButton render_content={this.render_debug}/>
          <h1>Hypercore Swarm</h1>
          <input value={peer_name} onChange={this.on_peer_name}/>
          <select onChange={this.on_wss}>
            <option value={WSS1}>{WSS1}</option>
            <option value={WSS2}>{WSS2}</option>
            <option value={WSS3}>{WSS3}</option>
            <option value=''>Default</option>
          </select>
          <button onClick={this.on_click}>Join Swarm</button>
          <pre style={{fontSize: '13px'}}>{this._log.join('\n')}</pre>
        </div>
      </Layout>
    );
  }
}
