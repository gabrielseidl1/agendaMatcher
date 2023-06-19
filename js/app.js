// No arquivo app.js ou em qualquer outro lugar apropriado
const openDatabase = indexedDB.open('my-database', 1);

openDatabase.onupgradeneeded = event => {
    const db = event.target.result;
    const objectStore = db.createObjectStore('my-data', { keyPath: 'id' });
    // Definir índices, se necessário
};

openDatabase.onsuccess = event => {
    const db = event.target.result;
    const transaction = db.transaction(['my-data'], 'readwrite');
    const objectStore = transaction.objectStore('my-data');

    // Adicionar dados
    objectStore.add({ id: 1, name: 'John' });
    objectStore.add({ id: 2, name: 'Jane' });

    // Recuperar dados
    const getRequest = objectStore.get(1);
    getRequest.onsuccess = event => {
        const data = event.target.result;
        console.log(data); // { id: 1, name: 'John' }
    };
}