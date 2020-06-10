import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBo1vcvWUKstN62DjJf3eOoXuqJX7ahFbs",
    authDomain: "appindex-808c3.firebaseapp.com",
    databaseURL: "https://appindex-808c3.firebaseio.com",
    projectId: "appindex-808c3",
    storageBucket: "appindex-808c3.appspot.com",
    messagingSenderId: "306437566986",
    appId: "1:306437566986:web:59a95cf1ca54b37da325f3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : "select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;