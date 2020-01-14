import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
	apiKey: "AIzaSyAK8SQ_l8TEXm8HNZZNTHMB6BQyvr4g5ws",
	authDomain: "coffee-diary-journal.firebaseapp.com",
	databaseURL: "https://coffee-diary-journal.firebaseio.com",
	projectId: "coffee-diary-journal",
	storageBucket: "coffee-diary-journal.appspot.com",
	messagingSenderId: "794723262787",
	appId: "1:794723262787:web:f0ab87458a465a81410ff6",
	measurementId: "G-RP7VLL3J8B"
  })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }