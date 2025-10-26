// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIcKogneFoY5zgJ2lJm0g1gOmSGIAGjpM",
  authDomain: "blog-app-6ce10.firebaseapp.com",
  projectId: "blog-app-6ce10",
  storageBucket: "blog-app-6ce10.firebasestorage.app",
  messagingSenderId: "816148060432",
  appId: "1:816148060432:web:bdfc123e2ee7202a8c6d95",
  measurementId: "G-T3XLZTMHMW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

