// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ-3Gi7q3B3OnYMO1TxPZA9Vcuza-735A",
    authDomain: "first-app-a0126.firebaseapp.com",
    databaseURL: "https://first-app-a0126-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-app-a0126",
    storageBucket: "first-app-a0126.firebasestorage.app",
    messagingSenderId: "256690195099",
    appId: "1:256690195099:web:c836ca2d3f0396a450143e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider=new GoogleAuthProvider()
export const fireStoreDb=getFirestore(app)