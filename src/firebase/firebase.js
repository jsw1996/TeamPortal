
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/auth"

// Add the Firebase products that you want to use
import "firebase/firestore";
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBh3OJpEg7cPbrSLq1VX4jOJ2j-kELNf0k",
    authDomain: "teamportal-baa93.firebaseapp.com",
    projectId: "teamportal-baa93",
    storageBucket: "teamportal-baa93.appspot.com",
    messagingSenderId: "467926069948",
    appId: "1:467926069948:web:3e00bb687a97dc5e1c56b9",
    measurementId: "G-YRV08RKZ76"
};
const app = firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = app.auth()

export var db = firebase.firestore();
export var storage = firebase.storage();
export var storageRef = firebase.storage().ref();
