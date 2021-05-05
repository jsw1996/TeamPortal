import { db } from './firebase'


export function addMember(info) {
    return db.collection("users").add(info)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}


export async function readData(collectionName) {
    const snapshot = await db.collection('users').get();
    return snapshot;
}