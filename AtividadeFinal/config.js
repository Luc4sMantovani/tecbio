import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
const database = getDatabase(app);

