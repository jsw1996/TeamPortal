import { db } from './firebase'


function addUser(collectionName, content) {
    return db.collection("users").add(content)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}