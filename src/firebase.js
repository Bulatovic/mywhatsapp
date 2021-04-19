import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGpX_UOt88OLm8YKkYiB5DeKiL2qIUWRg",
  authDomain: "mywhatsapp-6fdbe.firebaseapp.com",
  projectId: "mywhatsapp-6fdbe",
  storageBucket: "mywhatsapp-6fdbe.appspot.com",
  messagingSenderId: "414305191379",
  appId: "1:414305191379:web:78f142d709eaa99e231b26",
  measurementId: "G-JFK8WYL51L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
