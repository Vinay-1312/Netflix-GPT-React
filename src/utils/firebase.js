// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmrQGpyAe3GjKIOVKb-rXAxMrTeKL-oLA",
  authDomain: "netflix-react-1aa66.firebaseapp.com",
  projectId: "netflix-react-1aa66",
  storageBucket: "netflix-react-1aa66.appspot.com",
  messagingSenderId: "322271362484",
  appId: "1:322271362484:web:0a8164bb7e99069111c6e1",
  measurementId: "G-5JVB9F2JGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
