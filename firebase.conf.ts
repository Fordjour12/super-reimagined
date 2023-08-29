// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_APIKEY,
//   authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
//   projectId: process.env.EXPO_PUBLIC_PROJECTID,
//   storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
//   appId: process.env.EXPO_PUBLIC_APPID,
//   measurementId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBS65bI1zZCA8bSBLxwJZGtUSIFSTGF0_E",
  authDomain: "real-estate-7ea.firebaseapp.com",
  projectId: "real-estate-7ea",
  storageBucket: "real-estate-7ea.appspot.com",
  messagingSenderId: "104725137700",
  appId: "1:104725137700:web:ab266e36ba3aa1a19d0bb1",
  measurementId: "G-K2DWBRQEV9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(app);
export const Firebase_db = getFirestore(app);
