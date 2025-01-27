self.addEventListener('install', (event) => {
    // Instala el Service Worker
    event.waitUntil(
        caches.open('my-cache')
            .then(cache => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/estilo.css',
                    '/manifest.json',
                    '/pistas.json',
                    '/audio/a.mp3',
                    '/audio/b.mp3',
                    '/audio/c.mp3',
                    '/audio/d.mp3',
                    '/audio/e.mp3',
                    '/audio/f.mp3',
                    '/audio/g.mp3',
                    '/audio/h.mp3',
                    '/audio/i.mp3',
                    '/audio/j.mp3',
                    '/audio/k.mp3',
                    '/audio/l.mp3',
                    '/audio/m.mp3',
                    '/audio/n.mp3',
                    '/audio/o.mp3',
                    '/audio/p.mp3',
                    '/audio/q.mp3',
                    '/audio/r.mp3',
                    '/audio/q.mp3',
                    '/icons/icon-32.png',
                    '/icons/icon-64.png',
                    '/icons/icon-128.png',
                    '/icons/icon-256.png',
                    '/icons/icon-512.png',
                    '/img/a.png',
                    '/img/b.png',
                    '/img/c.png',
                    '/img/d.png',
                    '/img/e.png',
                    '/img/f.png',
                    '/img/g.png',
                    '/img/h.png',
                    '/img/i.png',
                    '/img/j.png',
                    '/img/k.png',
                    '/img/l.png',
                    '/img/m.png',
                    '/img/n.png',
                    '/img/o.png',
                    '/img/p.png',
                    '/img/q.png',
                    '/img/r.png',
                    '/img/ctrlStop.png',
                    '/img/ctrlStopActivo.png',
                    '/img/icn-musica-off.svg',
                    '/img/icn-musica-on.svg',
                    '/js/procesos.js'
                ]);
            })
    );
});

self.addEventListener('fetch', (event) => {
    // Intercepta las peticiones y sirve desde el caché
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
