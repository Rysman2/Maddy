// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSoaYo3Md4dXuqVV3cBfU3IbeY9QrTo",
  authDomain: "Maddy-e-Domy.firebaseapp.com",
  projectId: "Maddy-e-Domy",
  storageBucket: "Maddy-e-Domy.appspot.com",
  messagingSenderId: "620926001920",
  appId: "1:620926001920:web:a35dcf0ea6868cbbb649e5",
  measurementId: "G-ERQBZ8SGYV"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funzione per salvare la risposta in Firestore
async function salvaRisposta(risposta) {
  try {
    await addDoc(collection(db, "risposte"), {
      risposta: risposta,
      timestamp: new Date()
    });
    alert("Risposta salvata con successo!");
  } catch (e) {
    console.error("Errore durante il salvataggio: ", e);
  }
}

// Associa gli eventi ai bottoni
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".buttons button:nth-child(1)").addEventListener("click", () => salvaRisposta("Yes"));
  document.querySelector(".buttons button:nth-child(2)").addEventListener("click", () => salvaRisposta("No"));
});
