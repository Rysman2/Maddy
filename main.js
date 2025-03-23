
<script type="module">
  // Import the functions you need from the SDKs you need
  import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
async function mostraRisultati() {
  const querySnapshot = await getDocs(collection(db, "risposte"));
  querySnapshot.forEach((doc) => {
    // doc.id è l'ID del documento (generato automaticamente)
    // doc.data() contiene i dati del documento
    console.log(doc.id, " => ", doc.data());
    // Puoi anche creare elementi HTML per mostrare i dati sul sito
  });
}
document.getElementById('testBtn').addEventListener('click', async () => {
  console.log("Clic sul pulsante, invio dati...");
  try {
    const docRef = await addDoc(collection(db, "risposte"), {
      nome: "Mario",
      messaggio: "Ciao!",
      submitted_at: new Date()
    });
    console.log("Documento aggiunto con ID: ", docRef.id);
    alert("Documento aggiunto!");
  } catch (error) {
    console.error("Errore durante l'invio:", error);
  }
});

mostraRisultati();
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSoaYo3Md4dXuqVV3cBfUuE3IbeY9QrTo",
    authDomain: "Maddy e DOmy.firebaseapp.com",
    projectId: "Maddy e DOmy",
    storageBucket: "Maddy e DOmy.firebasestorage.app",
    messagingSenderId: "620926001920",
    appId: "1:620926001920:web:a35dcf0ea6868cbbb649e5",
    measurementId: "G-ERQBZ8SGYV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
