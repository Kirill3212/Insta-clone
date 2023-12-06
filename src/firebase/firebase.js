import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLmpK-ikeLUOUSSy8ZW0Oik8UkiD88ld0",
  authDomain: "insta-clone-44dd4.firebaseapp.com",
  projectId: "insta-clone-44dd4",
  storageBucket: "insta-clone-44dd4.appspot.com",
  messagingSenderId: "830110088903",
  appId: "1:830110088903:web:1c6cfb7b7da81b72dd48e2",
  measurementId: "G-TXCLF85BRD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
