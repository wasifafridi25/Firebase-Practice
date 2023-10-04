// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc1eXsuVo4kR2BhTM9xe72EzbUqe7ue9w",
  authDomain: "fir-practice-151fa.firebaseapp.com",
  projectId: "fir-practice-151fa",
  storageBucket: "fir-practice-151fa.appspot.com",
  messagingSenderId: "1067616810448",
  appId: "1:1067616810448:web:06c6dd7c2362f2b05a35d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();