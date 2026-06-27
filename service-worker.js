const CACHE_NAME = "nabat-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/favicon/favicon.ico",
  "/favicon/favicon.svg",

  "/images/background.avif",
  "/images/background.webp",
  "/images/background.png",

  "/favicon/apple-touch-icon.png",
  "/favicon/web-app-manifest-192x192.png",
  "/favicon/web-app-manifest-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});



