// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hCVXad77dLVERiZLQGn3ne81hQFuqCY",
  authDomain: "stress-places.firebaseapp.com",
  projectId: "stress-places",
  storageBucket: "stress-places.firebasestorage.app",
  messagingSenderId: "137115285004",
  appId: "1:137115285004:web:02d731b7d41012a4d1e029",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export supaya boleh guna di file lain
export {
  app,
  auth,
  provider,
  db,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  serverTimestamp
};
