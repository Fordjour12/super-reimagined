// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  apiKey: "AIzaSyDNqebZ_SUVVZiUrp5Le1_CY8Ao7lAfQI8",
  authDomain: "com-thephantomdev.firebaseapp.com",
  projectId: "com-thephantomdev",
  storageBucket: "com-thephantomdev.appspot.com",
  messagingSenderId: "868110718852",
  appId: "1:868110718852:web:1ee635de438cff27cdafd1",
  measurementId: "G-XFSRDL4YSC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(app);
export const Firebase_db = getFirestore(app);
