// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAYmNW-7zqgAsMOJ0atELbMFeIRZIsmQc",
  authDomain: "todo-app-yt-71d15.firebaseapp.com",
  projectId: "todo-app-yt-71d15",
  storageBucket: "todo-app-yt-71d15.appspot.com",
  messagingSenderId: "979145585683",
  appId: "1:979145585683:web:10b5d28e208ace3e0e7be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)