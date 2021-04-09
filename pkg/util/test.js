'use strict';
const LIF = require('./lif.js');
const Scroll = LIF.Scroll;

it('http_site', function(){
  return; // XXX: old code, rewrite according to design
  // XXX: create/load LIF.Wallet
  // XXX: 1. use real names 2. check if we can use lif://
  let s = Scroll.create();
  s.declare({type: 'scroll', faith: 'derry', tag: 'http'});
  s.declare({type: 'http', domain: 'lior@lif', uri: '/index.html',
    content: `<html><body><img src="lif://lior@lif/lior.jpg"/>
      </body></html>`});
  s.declare({type: 'http', domain: 'john@lif', uri: '/john.jpg',
    blob: 'XXX'});
  let god = Scroll.create();
  god.declare({type: 'scroll', faith: 'john', tag: 'faith'});
  god.declare({type: 'faith', type_on: 'http',
    def: {file_ext: {'.jpg': {'content-type': 'image/jpeg'}}}});
  god.declare({type: 'faith', type_on: 'http',
    def: {uri: {'/index.html': {homepage: true}}}});
  god.declare({type: 'domain', domain: 'john@lif'});
});
});
