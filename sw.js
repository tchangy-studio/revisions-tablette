/* Révisions 0.8.0 — licence PolyForm Noncommercial 1.0.0 : libre pour les familles et les écoles, pas d'usage commercial. */
const C = "revisions-0.8.0", F = ["./","app.js","jeux.js","jeux_ce2.js","jeux_cm.js","jeux_cp.js","jeux_mat.js","recre.js","regles.js","local.js","style.css","eveil.webm","icone-180.png","icone-192.png","icone-512.png","icone.svg","index.html","parents.html","manifest.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(F.map(u => new Request(u, { cache: "reload" }))))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(l => Promise.all(l.filter(k => k !== C).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => { if (e.request.method !== "GET") return; e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request))); });
