import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// On colle notre json de configuration
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
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