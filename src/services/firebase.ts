// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyPHhONGStZeXF_Wc6bOvJrYkbS_-1REQ",
  authDomain: "saffir-joias.firebaseapp.com",
  projectId: "saffir-joias",
  storageBucket: "saffir-joias.appspot.com",
  messagingSenderId: "423800863314",
  appId: "1:423800863314:web:5000bc810d0d58f8e63d8b",
  measurementId: "G-VYPPQJ4SBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);