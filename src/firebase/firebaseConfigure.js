// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-eue7KC4Q9TqkxGC7eof89sDOQ4F42fE",
  authDomain: "practica-celuweb.firebaseapp.com",
  projectId: "practica-celuweb",
  storageBucket: "practica-celuweb.appspot.com",
  messagingSenderId: "248151852479",
  appId: "1:248151852479:web:1bc3752c267078295bcd0a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);