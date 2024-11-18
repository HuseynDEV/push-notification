importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);


const firebaseConfig = {
    apiKey: "AIzaSyDJ-3Gi7q3B3OnYMO1TxPZA9Vcuza-735A",
    authDomain: "first-app-a0126.firebaseapp.com",
    databaseURL: "https://first-app-a0126-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-app-a0126",
    storageBucket: "first-app-a0126.firebasestorage.app",
    messagingSenderId: "256690195099",
    appId: "1:256690195099:web:c836ca2d3f0396a450143e"
};


firebase.initializeApp(firebaseConfig);
firebase.messaging();