import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhqBjnYVLC_CSO5iR3tsPqREIIncz9M8o",
    authDomain: "twitter-clone-6be4c.firebaseapp.com",
    projectId: "twitter-clone-6be4c",
    storageBucket: "twitter-clone-6be4c.appspot.com",
    messagingSenderId: "548962910124",
    appId: "1:548962910124:web:8718015b15d1927a724409",
    measurementId: "G-YKYKDREXBJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;