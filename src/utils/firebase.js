// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFYpjZ7yIDx0l0fpYscwT_wWuQRkeYFHQ",
  authDomain: "netflix-gpt-9b0e4.firebaseapp.com",
  projectId: "netflix-gpt-9b0e4",
  storageBucket: "netflix-gpt-9b0e4.appspot.com",
  messagingSenderId: "543244379876",
  appId: "1:543244379876:web:81c8a0e20f5b757a2deef1",
  measurementId: "G-PTMB0E0HDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
