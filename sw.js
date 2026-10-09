const C='ameliore-video-v1';
const SHELL=['./','index.html','manifest.json','ffmpeg.js','814.ffmpeg.js','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)));self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    if(res.ok&&(res.type==='basic'||res.type==='cors')){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));}
    return res;
  })));
});
