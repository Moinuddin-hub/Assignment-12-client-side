// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBdNcsFuYNrBvrGkcZZA3jfYo54uS3Ykgk",
  // authDomain: "fir-glasess.firebaseapp.com",
  // projectId: "fir-glasess",
  // storageBucket: "fir-glasess.appspot.com",
  // messagingSenderId: "201660969067",
  // appId: "1:201660969067:web:90fe2e04b5a838f64c412e"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);