// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Example: Firebase Auth
import { getFirestore } from "firebase/firestore"; // Example: Firestore
import { getStorage } from "firebase/storage"; // Example: Firebase Storage

// Firebase configuration (Replace with your actual config)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in your app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
