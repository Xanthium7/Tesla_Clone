import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMKhMsFhM2rDejwTLqFhmH2SAtR7VPaIM",
    authDomain: "tesla-clone-c23f3.firebaseapp.com",
    projectId: "tesla-clone-c23f3",
    storageBucket: "tesla-clone-c23f3.appspot.com",
    messagingSenderId: "62429349957",
    appId: "1:62429349957:web:771538c3a5f9f9c6b7fb2c",
    measurementId: "G-YR271WXBQ9"

});


const db = firebaseApp.firestore();

export default db;
