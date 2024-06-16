import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// On colle notre json de configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBAC0igwF6k0rx95E8NsV8WxwbqiQfl_0",
    authDomain: "linkedin-clone-1ae69.firebaseapp.com",
    projectId: "linkedin-clone-1ae69",
    storageBucket: "linkedin-clone-1ae69.appspot.com",
    messagingSenderId: "186104763354",
    appId: "1:186104763354:web:76f4663356ef83eb4e66e3"
};

// On configure notre application avec firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// On déclare notre base de données firebase
const db = firebaseApp.firestore();

// On déclare l'authentification utilisé par firebase
const auth = firebase.auth();

// On exporte les deux variables db et auth
// Pour utiliser db sur le composant db feed (récuruper les postes existants sur firebase) 
// Pour auth, je sais pas encore
export {db, auth}