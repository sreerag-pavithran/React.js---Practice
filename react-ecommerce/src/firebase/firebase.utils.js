import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBdPAP7lp9iIyIX9hbrRoi67AcXz0sJjvw",
    authDomain: "react-ecommerce-iamsreerag.firebaseapp.com",
    databaseURL: "https://react-ecommerce-iamsreerag.firebaseio.com",
    projectId: "react-ecommerce-iamsreerag",
    storageBucket: "react-ecommerce-iamsreerag.appspot.com",
    messagingSenderId: "1016272244799",
    appId: "1:1016272244799:web:177b971a9e71cb1c5f688a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;