import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyANuZqGncptsZeWOZMC4j5doYl9FEopFRI",
//   authDomain: "rub-job-ff7a2.firebaseapp.com",
//   projectId: "rub-job-ff7a2",
//   storageBucket: "rub-job-ff7a2.appspot.com",
//   messagingSenderId: "776672616101",
//   appId: "1:776672616101:web:e1c43106e9bb23ab66b74c",
//   measurementId: "G-NS4V07WFXD",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDzhGoj-EgYMY6f0GWKlA7Nik21xfmasm4",
  authDomain: "rub-job-new.firebaseapp.com",
  projectId: "rub-job-new",
  storageBucket: "rub-job-new.appspot.com",
  messagingSenderId: "55286321939",
  appId: "1:55286321939:web:1ac0bf30c968f7dd5780e6",
  measurementId: "G-SF0QNHJ5HY",
};

// Init
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const db = getFirestore(app);
const auth = getAuth(app);
export { app, auth, db };
