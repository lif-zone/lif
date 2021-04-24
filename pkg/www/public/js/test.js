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


const SDK = window.hyperSDK

async function init(){
  const sdk = await SDK()
  const {Hypercore} = sdk;
  const core = Hypercore('my hypercore name')
  await core.ready();
  console.log('core length %s key %s', core.length, core.key);
  await core.append(''+new Date());
  console.log('core length %s', core.length);
}

init();
