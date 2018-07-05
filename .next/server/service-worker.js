self.__precacheManifest = [{"url":"/_next/a2ec03ab-dc33-4b24-8995-2e97f9a3096f/page/_app.js","revision":"a2ec03ab-dc33-4b24-8995-2e97f9a3096f"},{"url":"/_next/a2ec03ab-dc33-4b24-8995-2e97f9a3096f/page/_document.js","revision":"a2ec03ab-dc33-4b24-8995-2e97f9a3096f"},{"url":"/_next/a2ec03ab-dc33-4b24-8995-2e97f9a3096f/page/_error.js","revision":"a2ec03ab-dc33-4b24-8995-2e97f9a3096f"},{"url":"/_next/a2ec03ab-dc33-4b24-8995-2e97f9a3096f/page/about.js","revision":"a2ec03ab-dc33-4b24-8995-2e97f9a3096f"},{"url":"/_next/a2ec03ab-dc33-4b24-8995-2e97f9a3096f/page/index.js","revision":"a2ec03ab-dc33-4b24-8995-2e97f9a3096f"}]
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
