const cacheName = "cache";
const urls = ['index.html', 'offline.html'];

this.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(urls)
            })
    );
});

this.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request) 
            .then(() => {
                return fetch(e.request)
                    .catch(() => {
                        return caches.match('./offline.html')
                });
            })
    );
});

this.addEventListener('activate', (e) => {
    const cacheList = [];
    cacheList.push(cacheName);

    e.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map((cacheName) => {
                    if(!cacheList.includes(cacheName))
                        return caches.delete(cacheName);
                })
            ))
    );
});