'use strict';
const LIF = require('./lif.js');

// XXX arik: check max size of indexdb of browser (service worker)

var assert = require('assert');
describe('Scroll', function(){
  describe('api', function(){
    it('basic', function(){
      let s = LIF.Scroll.create();
      // XXX: temporary hack, use sinon to control time
      Date.now = function(){ return 100; };
      // in declare set ts+sig + and use previous sig
      // create example for voting for best practice
      // every example need to educate person on how to use it
      // focus first on order (so that one declaration signed the previous one
      s.declare({type: 'contract', text: 'Hello LIF'});
      s.declare({type: 'vote', text: 'Hello LIF'});
      s.write({type: text: 'And you?'});
      s.close();
      assert.deepEqual(s.lines, [
        {sig: 1234, json: {ts: 100, type: 'scroll', sub_type: 'start',
          text: 'Hello LIF'}},
        {sig: 1234, json: {ts: 100, type: 'scroll', sub_type: 'line',
          text: 'I am a free man'}},
        {sig: 1234, json: {ts: 100, type: 'scroll', sub_type: 'close',
          text: 'And you?'}}
      ]);
    });
  });
});
