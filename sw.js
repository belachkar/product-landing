/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Cache html
// workbox.routing.registerRoute(
//   /\.html$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'html-cache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );

// Cache images
// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
//   new workbox.strategies.CacheOnly({
//     cacheName: 'images-cache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );

// Cache Style sheet files
// workbox.routing.registerRoute(
//   /\.css$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'css-cache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );

// Cache JS files
// workbox.routing.registerRoute(
//   /\.js$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'js-cache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );

// Cache fonts files
// workbox.routing.registerRoute(
//   /\.(?:eot|woff|woff2|ttf)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'fonts-cache',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
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
    "revision": "578255be41075bb5874e5867eb675a17"
  },
  {
    "url": "index.html",
    "revision": "cef135e24117a856bb43b63aa57a0c09"
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
    "url": "js/script.js",
    "revision": "e2a7f99f7b847682be64adc86d9ca6c4"
  },
  {
    "url": "js/simple-lightbox-1.17.2.min.js",
    "revision": "1a82ff15c27b4b794ce1bd171b453a6a"
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
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
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

// Cache images
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
