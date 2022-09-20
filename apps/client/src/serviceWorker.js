/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'offline-v-1';
const OFFLINE_TMPL_URL = 'index.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.add(new Request(OFFLINE_TMPL_URL, { cache: 'reload' }));
    })()
  );
});

self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's supported.
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          return await fetch(event.request);
        } catch (error) {
          const cache = await caches.open(CACHE_NAME);
          return await cache.match(OFFLINE_TMPL_URL);
        }
      })()
    );
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();

      for (const cacheName of cacheNames) {
        if (cacheName !== CACHE_NAME) {
          await caches.delete(cacheName);
        }
      }
    })()
  );

  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});
