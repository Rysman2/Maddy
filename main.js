<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
<!-- Firebase App (the core Firebase SDK) -->
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"></script>
<!-- Add Firestore -->
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"></script>
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
</script>
  // Chiama la funzione per mostrare i risultati
  mostraRisultati();
</script>
