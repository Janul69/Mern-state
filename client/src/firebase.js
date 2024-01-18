// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fec41.firebaseapp.com",
  projectId: "mern-estate-fec41",
  storageBucket: "mern-estate-fec41.appspot.com",
  messagingSenderId: "722841447605",
  appId: "1:722841447605:web:d9b8c25ec936cf3a7522fc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
