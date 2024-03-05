// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//database adding
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHjIHQhK6WMgillvSGxj7wqlxqp2Qp6NE",
  authDomain: "stylef-d0dbd.firebaseapp.com",
  projectId: "stylef-d0dbd",
  storageBucket: "stylef-d0dbd.appspot.com",
  messagingSenderId: "748383411512",
  appId: "1:748383411512:web:4963237b54cb0ea9c375cd"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
