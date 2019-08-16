// This is my costum Service Worker
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Injected files target
workbox.precaching.precacheAndRoute([
  {
    "url": "css/brands.min.css",
    "revision": "3e034df4a1a407f99589ea84f68235a8"
  },
  {
    "url": "css/fontawesome.min.css",
    "revision": "fdf645cc739b9117ab562ea85c3a113b"
  },
  {
    "url": "css/simplelightbox.min.css",
    "revision": "3da4245a4496d75703313e6b3e2f1759"
  },
  {
    "url": "css/solid.min.css",
    "revision": "cf8693f4c7de72c2c1e658fe613ede77"
  },
  {
    "url": "css/style.css",
    "revision": "ba57050000c3cf3a339b5cb85d5ee6ff"
  },
  {
    "url": "js/brands.min.js",
    "revision": "619a92531a6f7c74b975cc59222385bd"
  },
  {
    "url": "js/fontawesome.min.js",
    "revision": "06aab865e1bcf087f1d14e9dd873cfbd"
  },
  {
    "url": "js/fontAwesomeKit.min.js",
    "revision": "b6c5c70f1cbf9fe8fa9d2766b4f1c9f5"
  },
  {
    "url": "js/jquery-2.2.4.min.js",
    "revision": "710458dd559c957714ac4a8e95357eb5"
  },
  {
    "url": "js/jquery-3.4.1.min.js",
    "revision": "a6b6350ee94a3ea74595c065cbf58af0"
  },
  {
    "url": "js/jquery-3.4.1.slim.min.js",
    "revision": "50dc009b65de5def1626271a5117f970"
  },
  {
    "url": "js/script.js",
    "revision": "db1c80ea34e5a5d1fa282f5ee53ed53d"
  },
  {
    "url": "js/simple-lightbox-1.17.2.min.js",
    "revision": "7846f84b724a76c5db06eef32458eb11"
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
    "url": "img/icons/icon-128x128.png",
    "revision": "0ea35391c4b78f5ad9702cf407bea63c"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "41ba3cb88bf2d290b28576d00b4369e0"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "1861c68d0f30774fff2a294a6f281367"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "e827ef6022c22bcd67ff1308b0c2fe89"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "85b0268742704c0697e68e220d11f51d"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "44c09f60b410ecebedb07c1b91ed0e5c"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "68694b40952fc5aae8300c464e3bc3bf"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "c9e803e4c691a569603615725d368f4b"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "3165b14bbf3b64fca65829ecde6b800d"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "75af8363f4a38af4de07e056ffa068f9"
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
    "revision": "f4e2aa6a10b878a8db2ca3c5c916f30a"
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
    "revision": "0822af19e93c323db1161fc34ed02dae"
  },
  {
    "url": "manifest.json",
    "revision": "427bba52c7095de7bbdc3cf7f9d008a7"
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
