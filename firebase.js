// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDDm6I27M8jwKNK3cCDC-30fe-cArwg3vY',
  authDomain: 'insta-clone-8a17a.firebaseapp.com',
  projectId: 'insta-clone-8a17a',
  storageBucket: 'insta-clone-8a17a.appspot.com',
  messagingSenderId: '315025840837',
  appId: '1:315025840837:web:5e246d84ae6351623ceeac',
  measurementId: 'G-GCDD6WR9T3',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
