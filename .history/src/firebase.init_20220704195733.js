// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC67rcJ6pbswDAckCxlmYr845iPSXxy_uo",
  authDomain: "organic-food-shop-f7d20.firebaseapp.com",
  projectId: "organic-food-shop-f7d20",
  storageBucket: "organic-food-shop-f7d20.appspot.com",
  messagingSenderId: "306726648260",
  appId: "1:306726648260:web:4684ff44713f09cfbf4c91",
  measurementId: "G-KPR1W6BEBC"
};

// Initialize Firebase

const firebaseApp =initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp);

export const auth = getAuth(firebaseApp)
export default firebaseApp