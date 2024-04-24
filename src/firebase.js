// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAG2DQqccJgTwcGoeeI2Jtma1bWtMcS7Js",
  authDomain: "alt-school-exam-cdce3.firebaseapp.com",
  projectId: "alt-school-exam-cdce3",
  storageBucket: "alt-school-exam-cdce3.appspot.com",
  messagingSenderId: "726029606254",
  appId: "1:726029606254:web:6e6addf1b591b6f642b57f",
  measurementId: "G-N59FFH1FY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };