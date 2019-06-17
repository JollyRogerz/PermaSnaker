
console.log('Hello from service-worker.js');

self.addEventListener('install', e => {
  e.waitUntil(
      caches.open('snake').then(cache => {
      return cache.addAll([
        '',
        '/',
        'index.html',
        'manifest.json',
        'css/main.css',
        'src/script.js',
        'fonts/JAGUAR.ttf',
        'src/snake.js',
        'src/icons/icon@96.png',
        'src/icons/icon@128.png',
        'src/icons/icon@256.png',
        'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.5/p5.js',
        'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.js',
       
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});