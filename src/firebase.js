import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaXRN_tsMBl7M-YOwo0WRAJpST5HyiNh4",
  authDomain: "amaazoon-clone.firebaseapp.com",
  projectId: "amaazoon-clone",
  storageBucket: "amaazoon-clone.appspot.com",
  messagingSenderId: "974551048709",
  appId: "1:974551048709:web:bf8351d3ef15fa5024726c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
