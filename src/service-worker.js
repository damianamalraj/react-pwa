/* eslint-disable no-restricted-globals */
console.log("Hello from Service Worker!!");
const statics = self.__WB_MANIFEST;
console.log("kmflkmlkfmv" + statics);

self.addEventListener("install", (event) => {
  console.log("Installing!");
  caches.open("v1").then((cache) => {
    cache.add("../build/index.html");
  });
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Activate!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If it is in in cache, respond with it
      if (response) {
        return response;
      }
      // Otherwise, go to network
      return fetch(event.request);
    })
  );
});
