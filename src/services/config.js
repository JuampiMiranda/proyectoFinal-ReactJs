import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi3j19ngbNnceR0x3vz-Jm-w34HVocF50",
  authDomain: "gima-market.firebaseapp.com",
  projectId: "gima-market",
  storageBucket: "gima-market.appspot.com",
  messagingSenderId: "851661108976",
  appId: "1:851661108976:web:44e78fcc83465f0116b435"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);