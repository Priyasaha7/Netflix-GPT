// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCiLbTddl4_ivl62IVlK7XxTorKMReyq0",
  authDomain: "netflixgpt-b2705.firebaseapp.com",
  projectId: "netflixgpt-b2705",
  storageBucket: "netflixgpt-b2705.firebasestorage.app",
  messagingSenderId: "332683200252",
  appId: "1:332683200252:web:902c86171329f1d088b979",
  measurementId: "G-004R5Y85QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();