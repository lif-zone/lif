console.log('test_sw loaded');
self.addEventListener('activate', evt =>{
  console.log('test_sw activated');
  return self.clients.claim();
});

self.addEventListener('fetch', evt=>{
  console.log('XXX fetch3');
  const {request} = evt;
  const {url, method, headers} = request;
  console.log('test_sw fetch %s %s %o %o', method, url, headers, request);
  //return null;
});

self.addEventListener('install', function(evt){
  console.log('XXX install');
});
