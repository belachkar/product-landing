// This is my costum Service Worker
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Injected files target
workbox.precaching.precacheAndRoute([
  {
    "url": "css/brands.min.css",
    "revision": "9e1cb1c44e47320098c698a5eab7de96"
  },
  {
    "url": "css/fontawesome.min.css",
    "revision": "22d47066db80e10a0207f5104bdae51d"
  },
  {
    "url": "css/simplelightbox.min.css",
    "revision": "3da4245a4496d75703313e6b3e2f1759"
  },
  {
    "url": "css/solid.min.css",
    "revision": "18918ee42733f1e4e3146a420688f58e"
  },
  {
    "url": "css/style.css",
    "revision": "ed219a59c604f445f2a490de8986afbe"
  },
  {
    "url": "js/brands.min.js",
    "revision": "54f2ba42f3c98b34f7c4cccc3b46ef92"
  },
  {
    "url": "js/fontawesome.min.js",
    "revision": "7a86583e987aa7c1688a2f9bbc846e12"
  },
  {
    "url": "js/fontAwesomeKit.min.js",
    "revision": "a8e6a3dde655976cfaa1ae45d67d78de"
  },
  {
    "url": "js/jquery-2.2.4.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "js/jquery-3.4.1.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "js/jquery-3.4.1.slim.min.js",
    "revision": "d9b11ca4d877c327889805b73bb79edd"
  },
  {
    "url": "js/script.js",
    "revision": "db1c80ea34e5a5d1fa282f5ee53ed53d"
  },
  {
    "url": "js/simple-lightbox-1.17.2.min.js",
    "revision": "1a82ff15c27b4b794ce1bd171b453a6a"
  },
  {
    "url": "img/gal2323.webp",
    "revision": "00362a7ac9b21d3de8107be4868252b1"
  },
  {
    "url": "img/gal39834.webp",
    "revision": "0250bec4aef06890c52580b5d896fd0e"
  },
  {
    "url": "img/gal43884.webp",
    "revision": "2ccd953962c374b80eba3b08ffebd37d"
  },
  {
    "url": "img/gal4545.webp",
    "revision": "9aedfbad14f1dfd050944c4d732e99c1"
  },
  {
    "url": "img/gal4958.webp",
    "revision": "936fbf6e86e43f00263550ebb3a3727f"
  },
  {
    "url": "img/gal74744.webp",
    "revision": "a1938f6cab25671b330f32d7f62963e4"
  },
  {
    "url": "img/section-b.webp",
    "revision": "949167572d43269d3b64c188f1fe2272"
  },
  {
    "url": "img/showcase.webp",
    "revision": "b1d7005e9426933d81b0535ebc98f607"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "3165b14bbf3b64fca65829ecde6b800d"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "f249e44df3044e7b0d665b550569ddf0"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "f2e186cfab4787d4ef6f1bb192aa9a1b"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "457cb96b6191ed105c4fe8463957f70d"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "f861a57c52ef711cf807a3eec92c0e17"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "a547e21eceadf53602caf057be9ad9fd"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "fdc155d57b7351ef85b3028ea3cfc048"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "5ee32f5c8598e1a63ddf1aad4ffe54f4"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "657a469469a2fc38a2901c68a3d56512"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "2cd2be177470d5096992572176bbe76e"
  },
  {
    "url": "index.html",
    "revision": "5f30e7dffa1bfc614645a5d7ee95d567"
  },
  {
    "url": "manifest.json",
    "revision": "6c128384965d58360f5ed90c721387e5"
  }
]);

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
