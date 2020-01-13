import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const firebaseConfig = {
    apiKey: "AIzaSyAK8SQ_l8TEXm8HNZZNTHMB6BQyvr4g5ws",
    authDomain: "coffee-diary-journal.firebaseapp.com",
    databaseURL: "https://coffee-diary-journal.firebaseio.com",
    projectId: "coffee-diary-journal",
    storageBucket: "coffee-diary-journal.appspot.com",
    messagingSenderId: "794723262787",
    appId: "1:794723262787:web:f0ab87458a465a81410ff6",
    measurementId: "G-RP7VLL3J8B"
}
firebase.initializeApp(firebaseConfig)

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();