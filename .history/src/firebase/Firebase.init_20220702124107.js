// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkvagf_GHiG7B7HLPC4Z_kYyZIW1czP_8",
  authDomain: "organic-food-restaurant.firebaseapp.com",
  projectId: "organic-food-restaurant",
  storageBucket: "organic-food-restaurant.appspot.com",
  messagingSenderId: "66169187320",
  appId: "1:66169187320:web:fbcee5e274b48edd33440d",
  measurementId: "G-PBW55DDDWE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp =initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp)
export default firebaseApp;