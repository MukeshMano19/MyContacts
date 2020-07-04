/* eslint-disable no-console */
let db = null
const dbName = "MyContacts"

var dbVersion = 1

const dbPromise = function(callback) {

    if (!('indexedDB' in window)) {
        throw new Error('Browser does not support IndexedDB')
    }

    const request = indexedDB.open(`${dbName}:${dbVersion}`, dbVersion)
        // On Upgrade Needed
    request.onupgradeneeded = e => {
        // alert("IDB version changing from " + e.oldVersion + " to " + dbVersion)

        db = e.target.result
        if (!db.objectStoreNames.contains('contacts')) {
            db.createObjectStore('contacts', {
                keyPath: "id",
                autoIncrement: true
            })
        }
        if (!db.objectStoreNames.contains('messagesHub')) {
            db.createObjectStore('messagesHub', {
                keyPath: "userId",
                autoIncrement: true
            })
        }
    }

    // On Success
    request.onsuccess = function(e) {
        db = e.target.result
        callback(db)
        db.close();
    }

    // On Error
    request.onerror = e => {
        alert(`error: ${e.target.error} was found`)
    }
}

const open = function(callback) {
    dbPromise(function(db) {
        if (db) callback
    })

}

const fetchData = function(tableName, callback) {
    dbPromise(function(db) {
        var transaction = db.transaction(tableName, 'readwrite');
        var objStore = transaction.objectStore(tableName);

        var keyRange = IDBKeyRange.lowerBound(0);
        var cursorRequest = objStore.openCursor(keyRange);

        var dataArray = [];

        transaction.oncomplete = function() {
            // console.log("Fetching " + tableName + " and version: " + dbVersion)
            callback(dataArray);
        };

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result;

            if (!!result == false) {
                return;
            }

            dataArray.push(result.value);

            result.continue();
        };

        cursorRequest.onerror = db.onerror;
    })
};


const saveData = function(tableName, payload) {
    console.log("savinng", tableName, "to idb")
    dbPromise(function(db) {
        var store = db.transaction(tableName, "readwrite").objectStore(tableName);
        // payload.forEach(function(data) {
        store.add(payload);
        // });
    })
}

const updateTable = function(tableName, payload) {
    dbPromise(function(db) {
        var store = db.transaction(tableName, "readwrite").objectStore(tableName);
        store.put(payload)
    })
}

const deleteObject = function(tableName, payload) {
    dbPromise(function(db) {
        var store = db.transaction(tableName, "readwrite").objectStore(tableName);
        store.delete(payload.id)
    })
}

export default {
    open,
    fetchData,
    saveData,
    updateTable,
    deleteObject
}