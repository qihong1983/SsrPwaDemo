self.__precacheManifest = [{"url":"/_next/cf25795c-7a21-4476-b2bf-0d084d075907/page/_app.js","revision":"cf25795c-7a21-4476-b2bf-0d084d075907"},{"url":"/_next/cf25795c-7a21-4476-b2bf-0d084d075907/page/_error.js","revision":"cf25795c-7a21-4476-b2bf-0d084d075907"},{"url":"/_next/cf25795c-7a21-4476-b2bf-0d084d075907/page/about.js","revision":"cf25795c-7a21-4476-b2bf-0d084d075907"},{"url":"/_next/cf25795c-7a21-4476-b2bf-0d084d075907/page/index.js","revision":"cf25795c-7a21-4476-b2bf-0d084d075907"}]
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
