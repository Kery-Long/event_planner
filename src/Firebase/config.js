import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAYWzUIleGV8GIMw8hTbZxLN4Ir2Lwnl9Y",
    authDomain: "the-dojo-bbd1b.firebaseapp.com",
    projectId: "the-dojo-bbd1b",
    storageBucket: "the-dojo-bbd1b.appspot.com",
    messagingSenderId: "232617972594",
    appId: "1:232617972594:web:bf562bea62211ee4ce43eb",
    measurementId: "G-7Z31CNXTCK"
  };

 // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }