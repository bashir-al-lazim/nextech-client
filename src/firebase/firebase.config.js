// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-iQ2ZdNAHZl8ogf7ZVGWSF7vriIBT7g4",
  authDomain: "nextech-product-hunt.firebaseapp.com",
  projectId: "nextech-product-hunt",
  storageBucket: "nextech-product-hunt.appspot.com",
  messagingSenderId: "548174264854",
  appId: "1:548174264854:web:97a8a62fed2a40dc759337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;