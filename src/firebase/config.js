import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgOCNKouaM3iZaXJB9FXhk3R88bfq5Tlk",
  authDomain: "proyecto-coderhouse-6ea22.firebaseapp.com",
  projectId: "proyecto-coderhouse-6ea22",
  storageBucket: "proyecto-coderhouse-6ea22.appspot.com",
  messagingSenderId: "987528042508",
  appId: "1:987528042508:web:2fd99926d6ea936e9bb629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)