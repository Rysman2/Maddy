import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";


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

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Funzione per salvare una risposta
function salvaRisposta(nome, risposta) {
  db.collection("risposte").add({
    nome: nome,
    risposta: risposta,
    submitted_at: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log("Risposta salvata!");
  })
  .catch((error) => {
    console.error("Errore: ", error);
  });
}
