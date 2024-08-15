// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiElI_gDH-x1ESyktERLBTaTCwENl39bc",
  authDomain: "netflixgpt-f92d4.firebaseapp.com",
  projectId: "netflixgpt-f92d4",
  storageBucket: "netflixgpt-f92d4.appspot.com",
  messagingSenderId: "542785327733",
  appId: "1:542785327733:web:db17227ed380d0b0b1de3c",
  measurementId: "G-W3ZWSVDLWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();