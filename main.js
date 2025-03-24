// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSoaYo3Md4dXuqVV3cBfUuE3IbeY9QrTo",
  authDomain: "maddy-e-domy.firebaseapp.com",
  projectId: "maddy-e-domy",
  storageBucket: "maddy-e-domy.firebasestorage.app",
  messagingSenderId: "620926001920",
  appId: "1:620926001920:web:a35dcf0ea6868cbbb649e5",
  measurementId: "G-ERQBZ8SGYV"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funzione per salvare la risposta nel database
async function salvaRisposta(risposta) {
  const nomeUtente = document.getElementById("userName").value.trim();

  if (!nomeUtente) {
    alert("Inserisci il tuo nome!");
    return;
  }

  try {
    await addDoc(collection(db, "risposte"), {
      nome: nomeUtente,
      risposta: risposta,
      timestamp: new Date()
    });
    alert("Risposta salvata! Grazie 😊");
  } catch (error) {
    console.error("Errore nel salvataggio:", error);
    alert("Errore nel salvataggio. Riprova.");
  }
}

// Collega i bottoni alle funzioni
document.getElementById("yesButton").addEventListener("click", () => salvaRisposta("Yes :)"));
document.getElementById("noButton").addEventListener("click", () => salvaRisposta("No ;("));
