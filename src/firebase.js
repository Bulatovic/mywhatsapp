import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3BsGxhSFkMQODLWal-6iGvAlTapXYZx4",
    authDomain: "whatsapp-clone-3782f.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-3782f.firebaseio.com",
    projectId: "whatsapp-clone-3782f",
    storageBucket: "whatsapp-clone-3782f.appspot.com",
    messagingSenderId: "843896776234",
    appId: "1:843896776234:web:c6c32ea9180e88ca670553",
    measurementId: "G-MKZY5M4DCP",
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export { auth, provider };
  export default db;