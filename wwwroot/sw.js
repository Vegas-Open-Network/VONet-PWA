// Skip waiting on install
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Take control on activate
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Always fetch from network, no cache
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
