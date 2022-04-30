import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBo3Lik2SyNWbUMO9xLaNuKz1C6lKQUrPQ",
    authDomain: "clone-79109.firebaseapp.com",
    projectId: "clone-79109",
    storageBucket: "clone-79109.appspot.com",
    messagingSenderId: "376860448368",
    appId: "1:376860448368:web:84ce8b8c86190e391ec6b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };