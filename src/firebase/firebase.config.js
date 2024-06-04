// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4v8iy0PUGIYj-cqqILakUdq1P0FmD_e8",
  authDomain: "sweet-abode.firebaseapp.com",
  projectId: "sweet-abode",
  storageBucket: "sweet-abode.appspot.com",
  messagingSenderId: "944485876657",
  appId: "1:944485876657:web:efd7b93fc4baf812867390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth