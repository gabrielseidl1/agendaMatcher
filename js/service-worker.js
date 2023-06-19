self.addEventListener("install", event => {
    console.log("WORKER: install event in progress.");
});

self.addEventListener("activate", event => {
    console.log("WORKER: activate event in progress.");
});

self.addEventListener("fetch", event => {
    console.log("recebemos um evento de fetch:", event);
    event.respondWith(
        "lalalalalal"
    );
});
