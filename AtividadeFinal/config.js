// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
/*
const initializeApp = require("firebase/app");
const getDatabase = require("firebase/database");
*/

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDr7NGu1BsXFQWExcUBDqjMYciisXFmsVE",
    authDomain: "biotec-6f2cb.firebaseapp.com",
    projectId: "biotec-6f2cb",
    storageBucket: "biotec-6f2cb.appspot.com",
    messagingSenderId: "677307481480",
    appId: "1:677307481480:web:76ed1f8704d69db78ace3d",
    measurementId: "G-5V9107FL69"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

console.log("App"+app);
