// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBdn97VzdR0lcWH4s6YOsO_F3vZx74Sge8",
  authDomain: "easemilker-web-e2831.firebaseapp.com",
  projectId: "easemilker-web-e2831",
  storageBucket: "easemilker-web-e2831.firebasestorage.app",
  messagingSenderId: "318268834461",
  appId: "1:318268834461:web:0f8651ef7dda5140e30a74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
