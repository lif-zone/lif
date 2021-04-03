'use strict';
const LIF = require('./lif.js');
const Scroll = LIF.Scroll;

describe('Scroll', function(){
it('http_site', function(){
  // XXX sesom: create/load LIF.Wallet
  let god = Scroll.create();
  god.declare({type: 'scroll', faith: 'sesom', tag: 'faith'});
  god.declare({type: 'faith', type_on: 'http',
    def: {file_ext: {'.jpg': {'content-type': 'image/jpeg'}}}});
  god.declare({type: 'faith', type_on: 'http',
    def: {uri: {'/index.html': {homepage: true}}}});
  god.declare({type: 'domain', domain: 'sesom@lif'});
  let s = Scroll.create();
  s.declare({type: 'scroll', faith: 'sesom', tag: 'http'});
  s.declare({type: 'http', domain: 'sesom@lif', uri: '/index.html',
    content: `<html><body><img src="lif://sesom@lif/sesom.jpg"/>
      </body></html>`});
  s.declare({type: 'http', domain: 'sesom@lif', uri: '/sesom.jpg',
    blob: 'XXX'});
/*
Q. how to access sesom@lif?
1. through http gateway https://sesom.lif.zone/
2. through LIF client

Q. how to find sesom@lif?
- using an index 'by domain' service
- an index service will read all scroll and maitain index of all the uri
  of a domain. the index will keep checksum for each uri.
- LIF provide (TBD) api to locate any checksum (eg. similar to bittorent
  way of locating files  by checksum)
*/
});
});
