// LICENSE_CODE LIF
'use strict';

let E = module.exports;

class Scroll {
  constructor(){
    this.lines = [];
  }
  write(json, blob){
    // XXX: what is json contains ts/type?
    json = Object.assign({ts: Scroll.ts(), type: 'scroll', sub_type: 'line'},
      json);
    if (this.pub_key)
      json.pub_key = this.pub_key;
    let l = {json};
    if (blob)
      l.blob = blob;
    l = Object.assign({sig: this.sign(l)}, l);
    this.lines.push(l);
    return l;
  }
  close(){
    console.log('XXX Scroll.close stub');
  }
  sign(line){
    console.log('XXX Scroll.sign stub');
    return 1234;
  }
  str(){
    return JSON.stringify(this.lines, null, '\t'); }
}

Scroll.create = function create(opt){
  console.log('XXX Scroll.create stub');
  return new Scroll();
};

Scroll.open = function create(opt){
  console.log('XXX Scroll.create stub');
  return new Scroll();
};

Scroll.ts = function(){
  // XXX: need monotonic and high precision
  return Date.now();
};

E.Scroll = Scroll;
