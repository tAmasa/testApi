// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoJhP-gm2Q2QpkIJLZGQssIlYoBGvxT30",
  authDomain: "coviddashboard-1a3ae.firebaseapp.com",
  projectId: "coviddashboard-1a3ae",
  storageBucket: "coviddashboard-1a3ae.appspot.com",
  messagingSenderId: "935531681575",
  appId: "1:935531681575:web:47693bf9cf35be2229bb02",
  measurementId: "G-K0E9KCHGSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);