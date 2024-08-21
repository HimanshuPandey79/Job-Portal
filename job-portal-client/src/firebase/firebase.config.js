// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5TCYKd_bQbFxkLNVPe-m4IjXqvesmxQI",
  authDomain: "job-portal-demo-bf124.firebaseapp.com",
  projectId: "job-portal-demo-bf124",
  storageBucket: "job-portal-demo-bf124.appspot.com",
  messagingSenderId: "889940112976",
  appId: "1:889940112976:web:873a0e33d6e37be54e0355",
  measurementId: "G-BEEYSDBXH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;