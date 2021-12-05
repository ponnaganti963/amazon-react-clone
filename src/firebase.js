// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCsC-oe3JVUDTSocdjQIv8d44P43kHcV40",
    authDomain: "clone-c97c7.firebaseapp.com",
    projectId: "clone-c97c7",
    storageBucket: "clone-c97c7.appspot.com",
    messagingSenderId: "972389351378",
    appId: "1:972389351378:web:e9091e6a5381edcd61520b",
    measurementId: "G-GRH0NFTXC5"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
