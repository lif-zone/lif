// LICENSE_CODE LIF
'use strict';
const LIF = require('./lif.js');

var assert = require('assert');
describe('Scroll', function(){
  describe('api', function(){
    it('basic', function(){
      let s = LIF.Scroll.create();
      // XXX: temporary hack, use sinon to control time
      Date.now = function(){ return 100; };
      s.write({sub_type: 'start', text: 'Hello LIF'});
      s.write({text: 'I am a free man'});
      s.write({sub_type: 'close', text: 'And you?'});
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
