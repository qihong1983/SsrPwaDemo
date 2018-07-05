self.__precacheManifest = [{"url":"/_next/ac87526d-4e13-4685-820c-26b7d5ccc7c8/page/_app.js","revision":"ac87526d-4e13-4685-820c-26b7d5ccc7c8"},{"url":"/_next/ac87526d-4e13-4685-820c-26b7d5ccc7c8/page/_error.js","revision":"ac87526d-4e13-4685-820c-26b7d5ccc7c8"},{"url":"/_next/ac87526d-4e13-4685-820c-26b7d5ccc7c8/page/about.js","revision":"ac87526d-4e13-4685-820c-26b7d5ccc7c8"},{"url":"/_next/ac87526d-4e13-4685-820c-26b7d5ccc7c8/page/index.js","revision":"ac87526d-4e13-4685-820c-26b7d5ccc7c8"}]
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

importScripts(
  
);

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
