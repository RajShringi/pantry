// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pantry-8610c.firebaseapp.com",
  projectId: "pantry-8610c",
  storageBucket: "pantry-8610c.appspot.com",
  messagingSenderId: "550660290593",
  appId: "1:550660290593:web:41f3c511f6b418d235cb60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
