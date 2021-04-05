// chrome://flags/#unsafely-treat-insecure-origin-as-secure
window.addEventListener('load', function(){
  console.log('register serviceWorker');
  sw = navigator.serviceWorker.register(`/test_sw.js`)
  .then(function(reg){
    console.log('serviceWorker /js/ registered %o', reg);
    console.log('fetch /js/test.js');
    fetch('/js/test.js');
   }).catch(function(err){ console.log('serviceWorker err %o', err); });
});

