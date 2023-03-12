// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxng3afOj1eScgGGlwnlmVwD1bigWLP_A",
  authDomain: "do-react-e4886.firebaseapp.com",
  projectId: "do-react-e4886",
  storageBucket: "do-react-e4886.appspot.com",
  messagingSenderId: "371367602118",
  appId: "1:371367602118:web:431d40ae524d5faa4ef4c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);