// This is my costum Service Worker
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Injected files target
workbox.precaching.precacheAndRoute([]);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.(?:gstatic|googleapis)\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

// Cache external images
workbox.routing.registerRoute(
  /^https:\/\/i\.ibb\.co/,
  new workbox.strategies.CacheFirst({
    cacheName: 'ibb.images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days

        // Automatically cleanup if quota is exceeded.
        purgeOnQuotaError: true,
      })
    ]
  })
);

// Cache local jpg images
workbox.routing.registerRoute(
  /\.jpg$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'ibb.images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days

        // Automatically cleanup if quota is exceeded.
        purgeOnQuotaError: true,
      })
    ]
  })
);
