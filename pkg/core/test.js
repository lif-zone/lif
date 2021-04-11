'use strict';
const LIF = require('./lif.js');
const Scroll = LIF.Scroll;
const Wallet = LIF.Wallet;

it('http_site', async ()=>{
  if (1) return; // XXX: WIP
  let derry_jpg; // XXX load ByteArray of ../www/public/img/derry.jpg'
  let jquery_js; // XXX load jquery
  async function derry_pub(s, uri, html){
    let http = {domain: "derry.lif.zone", uri: uri};
    if (uri.endsWith('.jpg'))
      http.content_type = 'image/jpeg';
    await s.decl({http}, html);
  }
  let wallet = Wallet.create();
  let s = await Scroll.open({name: 'derry_site', wallet});
  // deploy derry's web site in one JS line
  derry_pub(s, "/", `<html><head><script src="//lif.zone/lif.js" /></head>
    <body>Welcome to Derry's site</body></html>`);
  // add derry's picture
  derry_pub(s, "/derry.jpg", derry_jpg);
  derry_pub(s, "/", `<html><head><script src="//lif.zone/lif.js" /></head>
    <body>Welcome to Derry's site <img src='derry.jpg'></body></html>`);
  // writing data: our first form
  derry_pub(s, "/jquery.js", jquery_js);
  derry_pub(s, "/", `<html>
    <head>
      <script src="//lif.zone/lif.js" />
      <script src='/jquery.js' />
      <script src='/home.js' />
    </head>
    <body>
      Welcome to Derry's site <img src='derry.jpg'>
      Your email: <input id=email>
      How can you help us: <input id=how>
      <button id=join_lif>
    </body></html>`);
  // XXX: need to define to which scoll we write
  derry_pub("/home.js", `
    $('#join_lif').on('click', function(){
      Scroll.write({http_post: {lif_join: {
        email: $('#email').value, phone: $('#phone)}}});
    });`);
});
