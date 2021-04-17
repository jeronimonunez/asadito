import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlT67y1WhXYlL8TzQMyq9YFsAG5bc8Oak",
    authDomain: "asadito-81935.firebaseapp.com",
    databaseURL: "https://asadito-81935.firebaseio.com",
    projectId: "asadito-81935",
    storageBucket: "asadito-81935.appspot.com",
    messagingSenderId: "1048268019337",
    appId: "1:1048268019337:web:8a779ea5dd2e2456ee9858"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
