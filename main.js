// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSoaYo3Md4dXuqVV3cBfUuE3IbeY9QrTo",
  authDomain: "maddy-e-domy.firebaseapp.com",
  projectId: "maddy-e-domy",
  storageBucket: "maddy-e-domy.firebasestorage.app",
  messagingSenderId: "620926001920",
  appId: "1:620926001920:web:a35dcf0ea6868cbbb649e5",
  measurementId: "G-ERQBZ8SGYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
