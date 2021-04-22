import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCkugTYTUrsPAkoU0BEbvah03EPWPehvvw",
    authDomain: "crwn-db-3c0ea.firebaseapp.com",
    databaseURL: "https://crwn-db-3c0ea-default-rtdb.firebaseio.com",
    projectId: "crwn-db-3c0ea",
    storageBucket: "crwn-db-3c0ea.appspot.com",
    messagingSenderId: "767721599677",
    appId: "1:767721599677:web:7c89e3911abe0d98493dd4",
    measurementId: "G-8YN5F8BPYL"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;









