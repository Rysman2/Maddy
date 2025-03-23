<script type="module">
  // Importa i moduli necessari da Firebase
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js';
  import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js';
  import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js';

  // Configurazione del tuo progetto Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBSoaYo3Md4dXuqVV3cBfUuE3IbeY9QrTo",
    authDomain: "Maddy e DOmy.firebaseapp.com",
    projectId: "Maddy e DOmy",
    storageBucket: "Maddy e DOmy.firebasestorage.app",
    messagingSenderId: "620926001920",
    appId: "1:620926001920:web:a35dcf0ea6868cbbb649e5",
    measurementId: "G-ERQBZ8SGYV"
  };

  // Inizializza Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Crea l'istanza di Firestore
  const db = getFirestore(app);

  // Funzione per mostrare i risultati dalla collezione "risposte"
  async function mostraRisultati() {
    const querySnapshot = await getDocs(collection(db, "risposte"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      // Qui puoi creare elementi HTML per mostrare i dati sul sito
    });
  }

  // Chiama la funzione per mostrare i risultati
  mostraRisultati();
</script>
