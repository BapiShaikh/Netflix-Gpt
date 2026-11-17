// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC51YkN854YRFfHBsse5TZt5Bp7G75PDSc",
  authDomain: "netflix-gpt-28d2f.firebaseapp.com",
  projectId: "netflix-gpt-28d2f",
  storageBucket: "netflix-gpt-28d2f.firebasestorage.app",
  messagingSenderId: "864982216631",
  appId: "1:864982216631:web:bd4f47fe7c1f193ce3c232",
  measurementId: "G-R324GV0RSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();