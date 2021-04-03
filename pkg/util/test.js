'use strict';
const LIF = require('./lif.js');
const Scroll = LIF.Scroll;

describe('Scroll', function(){
it('http_site', function(){
  // XXX: create/load LIF.Wallet
  let s = Scroll.create();
  s.declare({type: 'scroll', faith: 'john', tag: 'http'});
  s.declare({type: 'http', domain: 'john@lif', uri: '/index.html',
    content: `<html><body><img src="lif://john@lif/john.jpg"/>
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
/*
Q. how to access john@lif?
1. through http gateway https://john.lif.zone/
2. through LIF client

Q. how to find john@lif?
- using an index 'by domain' service
- an index service will read all scroll and maitain index of all the uri
  of a domain. the index will keep checksum for each uri.
- LIF provide (TBD) api to locate any checksum (eg. similar to bittorent
  way of locating files  by checksum)
*/
});
});
