// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYbVQPwtoy0CYKfGX2mOpMNmfKLN6ECak",
  authDomain: "jason-novacovici-portfolio.firebaseapp.com",
  projectId: "jason-novacovici-portfolio",
  storageBucket: "jason-novacovici-portfolio.appspot.com",
  messagingSenderId: "41447463940",
  appId: "1:41447463940:web:2195f078177369eacee951",
  measurementId: "G-MFB4CFW3M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);