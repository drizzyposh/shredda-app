import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC3d1jx3zdQmSOLV_Kk0IsL9qz_F5opyNU",
  authDomain: "shredda-saocial-media.firebaseapp.com",
  projectId: "shredda-saocial-media",
  storageBucket: "shredda-saocial-media.appspot.com",
  messagingSenderId: "106997709051",
  appId: "1:106997709051:web:c74e03b7e09d8e3f64d85e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();

export const db = getFirestore(app)