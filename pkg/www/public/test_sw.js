console.log('test_sw loaded');
self.addEventListener('activate', evt =>{
  console.log('test_sw activated');
  return self.clients.claim();
});

self.addEventListener('fetch', evt=>{
  const {request} = evt;
  const {url, method, headers} = request;
  console.log('test_sw fetch %s %s %o %o', method, url, headers, request);
});

self.addEventListener('install', function(evt){
  console.log('XXX install');
});
