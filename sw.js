const CACHE = 'car-guia-v1';
const STATIC = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/config.js',
  '/manifest.json',
  '/data/ARVORES_DECISAO.json',
  '/images/icons/icon-192.svg',
  '/images/icons/icon-512.svg',
  '/images/capa.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    }))
  );
});
