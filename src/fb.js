import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDewBM9i0kEwgpl-plCw2zBh17_qO_xRoo",
    authDomain: "ngasik-213d8.firebaseapp.com",
    databaseURL: "https://ngasik-213d8.firebaseio.com",
    projectId: "ngasik-213d8",
    storageBucket: "ngasik-213d8.appspot.com",
    messagingSenderId: "188332240090",
    appId: "1:188332240090:web:1b43c514cf6abc23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 

// db.settings({timestampsInSnapshots: true});

export default db;


  