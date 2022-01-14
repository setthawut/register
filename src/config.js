import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDshqiaeAgq2GGvRzJsD2847RogU6-kEiY",
  authDomain: "register-fb628.firebaseapp.com",
  projectId: "register-fb628",
  storageBucket: "register-fb628.appspot.com",
  messagingSenderId: "762122632801",
  appId: "1:762122632801:web:f4ed3f38f19e622341f420",
  measurementId: "G-9SP5BK9CRR",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
