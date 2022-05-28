

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvWoaFwBZvD_oTepY9QjeWSD_gPL_hyp8",
  authDomain: "fruits-management-system-72a13.firebaseapp.com",
  projectId: "fruits-management-system-72a13",
  storageBucket: "fruits-management-system-72a13.appspot.com",
  messagingSenderId: "596697432574",
  appId: "1:596697432574:web:a2acdec535f4a951cf00af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;
