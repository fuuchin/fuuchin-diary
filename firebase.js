// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYbWhvplQwEURSI4k5006RC1hBTCJ3cSs",
  authDomain: "fuuchin-diary.firebaseapp.com",
  projectId: "fuuchin-diary",
  storageBucket: "fuuchin-diary.appspot.com",
  messagingSenderId: "459932839129",
  appId: "1:459932839129:web:e24aa1762df88b4c7ba2c8",
  measurementId: "G-DHZBRYJPKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/// ブラウザのみで動作させる
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export const db = getFirestore();