// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDSI9Vs31cUspeV7UWAdvwcf5y3i9emzdo",
  authDomain: "easemilker-web.firebaseapp.com",
  projectId: "easemilker-web",
  storageBucket: "easemilker-web.firebasestorage.app",
  messagingSenderId: "513717812306",
  appId: "1:513717812306:web:69c542fc0eadf4ee95b38b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
