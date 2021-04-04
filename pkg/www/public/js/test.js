// chrome://flags/#unsafely-treat-insecure-origin-as-secure
let sw;
window.addEventListener('load', function() {
  console.log('register serviceWorker');
  sw = navigator.serviceWorker.register(`/test_sw.js`, {scope: '/js/'})
  .then(function(reg){
    console.log('serviceWorker /js/ registered %o', reg);
    console.log('fetch /js/test.js');
    fetch('/js/test.js');
   }).catch(function(err){ console.log('serviceWorker err %o', err); });
});

navigator.serviceWorker.addEventListener('message', evt=>{
  console.log('XXX message %o', evt);
});

