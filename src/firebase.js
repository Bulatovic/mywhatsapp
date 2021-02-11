import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDBftBfhZIz2QB8r-0COYyvEBo5u-ITAI",
  authDomain: "mywhatsapp-d1f1a.firebaseapp.com",
  projectId: "mywhatsapp-d1f1a",
  storageBucket: "mywhatsapp-d1f1a.appspot.com",
  messagingSenderId: "90816519251",
  appId: "1:90816519251:web:425f752fbbc73f6a467aa6",
  measurementId: "G-1KEE12V0TT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
