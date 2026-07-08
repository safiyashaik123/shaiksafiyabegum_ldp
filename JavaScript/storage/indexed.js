let db;

let request = indexedDB.open("CollegeDB", 1);


request.onupgradeneeded = function (event) {

    db = event.target.result;

    db.createObjectStore("Students", {
        keyPath: "id"
    });

};

request.onsuccess = function (event) {

    db = event.target.result;

    console.log("Database Opened");

};


request.onerror = function () {

    console.log("Database Error");

};

function addStudent() {

    let transaction = db.transaction("Students", "readwrite");

    let store = transaction.objectStore("Students");

    store.add({
        id: 1,
        name: "John",
        age: 20
    });

    store.add({
        id: 2,
        name: "Alice",
        age: 22
    });

    store.add({
        id: 3,
        name: "David",
        age: 21
    });


    request.onsuccess = function () {

        console.log("Student Added");

    };

}

function getStudent() {

    let transaction = db.transaction("Students", "readonly");

    let store = transaction.objectStore("Students");

    let request = store.get(1);

    request.onsuccess = function () {

        console.log("Student Details");
        console.log(request.result);

    };

}

function updateStudent() {

    let transaction = db.transaction("Students", "readwrite");

    let store = transaction.objectStore("Students");

    let request = store.put({

        id: 1,
        name: "John",
        age: 25

    });

    request.onsuccess = function () {

        console.log("Student Updated");

    };

}

function getAllStudents() {

    let transaction = db.transaction("Students", "readonly");

    let store = transaction.objectStore("Students");

    let request = store.getAll();

    request.onsuccess = function () {

        console.log("All Students");

        console.log(request.result);

    };

}

function deleteStudent() {

    let transaction = db.transaction("Students", "readwrite");

    let store = transaction.objectStore("Students");

    let request = store.delete(1);

    request.onsuccess = function () {

        console.log("Student Deleted");

    };

}