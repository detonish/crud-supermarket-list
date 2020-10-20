import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAlnInyx-Cswm5Iveei4TAHYWplSFaaARY",
    authDomain: "crud-1-f2ac2.firebaseapp.com",
    databaseURL: "https://crud-1-f2ac2.firebaseio.com",
    projectId: "crud-1-f2ac2",
    storageBucket: "crud-1-f2ac2.appspot.com",
    messagingSenderId: "921792770304",
    appId: "1:921792770304:web:738c6a9be714883ce143e5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db}
