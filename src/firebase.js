import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCmyqdbZGrNZ-SY6-nI9iBxsIobz0qCe5I",
    authDomain: "disneyplus-clone-cd607.firebaseapp.com",
    projectId: "disneyplus-clone-cd607",
    storageBucket: "disneyplus-clone-cd607.appspot.com",
    messagingSenderId: "868075049793",
    appId: "1:868075049793:web:e7e99621100c54dacac7c0",
    measurementId: "G-6170X9RBX4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;