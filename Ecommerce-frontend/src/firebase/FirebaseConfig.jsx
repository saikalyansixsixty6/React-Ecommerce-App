// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYZ7kvLN6hiwKT1Qda15Gu_T2XPHJJT88",
  authDomain: "myfirstapp-17929.firebaseapp.com",
  projectId: "myfirstapp-17929",
  storageBucket: "myfirstapp-17929.appspot.com",
  messagingSenderId: "662424834829",
  appId: "1:662424834829:web:def5d47db632c0409b1644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth} ;