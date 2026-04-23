/* ==========================================================
   service-worker.js ― PWA キャッシュ
   - 初回訪問時にコア資産をキャッシュ
   - 画像・音源はアクセス時に段階的にキャッシュ
   ========================================================== */
const CACHE_VERSION = "dolce-v1";
const CORE_CACHE = CACHE_VERSION + "-core";
const ASSET_CACHE = CACHE_VERSION + "-assets";

// 初回インストール時に即キャッシュするコア資産
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/save.js",
  "./js/engine.js",
  "./js/main.js",
  "./data/scenario_common.js",
  "./data/scenario_routes.js",
  "./data/assets_manifest.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter(k => !k.startsWith(CACHE_VERSION)).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;  // 外部リソースはスルー

  // 画像・音源 → Cache First（一度読んだらオフライン対応）
  if (/\/assets\//.test(url.pathname)) {
    event.respondWith(
      caches.open(ASSET_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const resp = await fetch(req);
          if (resp.ok) cache.put(req, resp.clone());
          return resp;
        } catch (e) {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  // HTML/CSS/JS → Network First with Cache Fallback
  event.respondWith(
    fetch(req).then(async (resp) => {
      if (resp.ok) {
        const cache = await caches.open(CORE_CACHE);
        cache.put(req, resp.clone());
      }
      return resp;
    }).catch(() => caches.match(req))
  );
});
