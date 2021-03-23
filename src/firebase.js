import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_hfSHAR9toVn94HmeyqH7RSW1zvPKfXY",
  authDomain: "mywhatsapp-9939f.firebaseapp.com",
  projectId: "mywhatsapp-9939f",
  storageBucket: "mywhatsapp-9939f.appspot.com",
  messagingSenderId: "688039065157",
  appId: "1:688039065157:web:e1348745016e30f1d6552c",
  measurementId: "G-WPVZVY9401",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
