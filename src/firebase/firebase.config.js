// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMkH63nZ6JhVio43SqlS7b0CTWsuAHxCc",
  authDomain: "travel-guru-7f220.firebaseapp.com",
  projectId: "travel-guru-7f220",
  storageBucket: "travel-guru-7f220.firebasestorage.app",
  messagingSenderId: "400915984071",
  appId: "1:400915984071:web:64ed19667e05b4d6b2d8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
