'use strict'; /*jslint node:true, browser:true, react: true*/
import Layout from '../components/layout.js';
import {Component} from 'react';
import {DebugButton} from '../components/common.js';
const Hyperswarm = require('hyperswarm-web');
const date = require('../../util/date.js');

export default class Swarm extends Component {
  state = {peer_name: ''+parseInt(Math.random()*100000)};
  _log = [];
  log(s){
    this._log.unshift(s);
    console.log(s);
    this.setState({force_render: Date.now()});
  }
  async start_swarm(){
    let conn_id = 0;
    const swarm_web = Hyperswarm();
    swarm_web.on('connection', (socket, info)=>{
      conn_id++;
      let id = conn_id;
      this.log(date.to_sql_ms()+' conn #'+id+': NEW  type '+info.type+' peer '+
        JSON.stringify(info.peer));
      socket.on('data', data=>{
        this.log(date.to_sql_ms()+' conn #'+id+': GOT_DATA '+data.toString());
      });
      socket.write(date.to_sql_ms()+ ' hello from '+this.state.peer_name);
    });
    const topic = Buffer.alloc(32).fill('hello world');
    this.log(date.to_sql_ms()+' join swarm');
    swarm_web.join(topic, {announce: true, lookup: true});
  }
  on_click = ()=>this.start_swarm();
  on_peer_name = e=>this.setState({peer_name: e.target.value});
  render_debug = ()=>{
    return <div>
      Log:
      <pre style={{fontSize: '13px'}}>{this._log.join('\n')}</pre>
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
          <button onClick={this.on_click}>Join Swarm</button>
          <pre style={{fontSize: '13px'}}>{this._log.join('\n')}</pre>
        </div>
      </Layout>
    );
  }
}
