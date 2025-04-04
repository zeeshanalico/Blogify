

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_h8rst_ded7JGSAqMSrhmCyqjkMwQrQo",
  authDomain: "bloogyblog-7f280.firebaseapp.com",
  projectId: "bloogyblog-7f280",
  storageBucket: "bloogyblog-7f280.firebasestorage.app",
  messagingSenderId: "156764830707",
  appId: "1:156764830707:web:efedc359b73ea999f2f086",
  measurementId: "G-KTQ2K5VJCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;