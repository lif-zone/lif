// chrome://flags/#unsafely-treat-insecure-origin-as-secure
console.log('register serviceWorker');
const sw = navigator.serviceWorker.register(`/js/test_sw.js`);
async function init(){
  await sw;
  console.log('fetch /js/test.js');
  fetch('/js/test.js');
}

setTimeout(init, 1000);

