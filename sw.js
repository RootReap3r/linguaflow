// LinguaFlow Service Worker
const CACHE = 'linguaflow-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network first for API calls, cache first for assets
  const url = new URL(e.request.url);
  const isAPI = url.hostname.includes('anthropic') ||
                url.hostname.includes('elevenlabs') ||
                url.hostname.includes('deepseek') ||
                url.hostname.includes('dashscope') ||
                url.hostname.includes('googleapis');

  if (isAPI) {
    // Always network for API — never cache API responses
    e.respondWith(fetch(e.request).catch(() => new Response('Offline', {status: 503})));
  } else {
    // Cache first for app shell
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return res;
      }))
    );
  }
});
