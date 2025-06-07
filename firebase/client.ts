
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAuth } from "firebase-admin/auth";
// import { getFirestore } from "firebase-admin/firestore";

import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA126avcP1B9v2KdNFYAKk-MO9nm6Unnrk",
  authDomain: "prepwise-2d9d9.firebaseapp.com",
  projectId: "prepwise-2d9d9",
  storageBucket: "prepwise-2d9d9.firebasestorage.app",
  messagingSenderId: "1045971750608",
  appId: "1:1045971750608:web:5ca03030cab2b8013758d5",
  measurementId: "G-H3MPV86YNW"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app)
