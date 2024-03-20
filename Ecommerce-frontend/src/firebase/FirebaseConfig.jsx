// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANriM_Gdzi_uPs34q9GwJjEW31kphyeBM",
  authDomain: "react-ecommerce-fa95c.firebaseapp.com",
  projectId: "react-ecommerce-fa95c",
  storageBucket: "react-ecommerce-fa95c.appspot.com",
  messagingSenderId: "400388874288",
  appId: "1:400388874288:web:02def6e1d6ee24af9fcdf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth} ;