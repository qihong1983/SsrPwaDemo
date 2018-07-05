self.__precacheManifest = [{"url":"/_next/491b6d69-7870-4094-808b-b713075fbab4/page/_app.js","revision":"491b6d69-7870-4094-808b-b713075fbab4"},{"url":"/_next/491b6d69-7870-4094-808b-b713075fbab4/page/_error.js","revision":"491b6d69-7870-4094-808b-b713075fbab4"},{"url":"/_next/491b6d69-7870-4094-808b-b713075fbab4/page/about.js","revision":"491b6d69-7870-4094-808b-b713075fbab4"},{"url":"/_next/491b6d69-7870-4094-808b-b713075fbab4/page/index.js","revision":"491b6d69-7870-4094-808b-b713075fbab4"}];
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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.png$/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/api/, workbox.strategies.networkFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200],"headers":{"x-test":"true"}})] }), 'GET');
