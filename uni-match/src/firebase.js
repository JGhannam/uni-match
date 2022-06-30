import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJ0dW3nmDBUDvjgv37Vj6pOVntRyVAu6s",
  authDomain: "idk-yet-be301.firebaseapp.com",
  databaseURL: "https://idk-yet-be301-default-rtdb.firebaseio.com",
  projectId: "idk-yet-be301",
  storageBucket: "idk-yet-be301.appspot.com",
  messagingSenderId: "684307009637",
  appId: "1:684307009637:web:119abf60adc169e389b68c",
  measurementId: "G-BRGW8DQ5K1",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
db.settings({ experimentalForceLongPolling: true, merge: true });

export { auth, db, storage, firebase };
