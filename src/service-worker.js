/* eslint-disable no-restricted-globals */
console.log("Hello from Service Worker!!");
const statics = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  console.log("Installing!");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Activate!");
});
