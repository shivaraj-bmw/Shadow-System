// Firebase SDK Config

const firebaseConfig = {
  apiKey: "AIzaSyDaTXfqH3vFTpFE5Tb9a8HBdbfyy_oaFiQ",
  authDomain: "shadow-system-c764a.firebaseapp.com",
  projectId: "shadow-system-c764a",
  storageBucket: "shadow-system-c764a.firebasestorage.app",
  messagingSenderId: "846401637018",
  appId: "1:846401637018:web:7e30a61672db4b228eed23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();