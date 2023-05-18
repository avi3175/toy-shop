// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUKc1zRq80x5Yz-ZL1MwTZAYpmJ1kWStU",
  authDomain: "toy-shop-e9c86.firebaseapp.com",
  projectId: "toy-shop-e9c86",
  storageBucket: "toy-shop-e9c86.appspot.com",
  messagingSenderId: "684823570684",
  appId: "1:684823570684:web:2ad13d7c0b3637e828cf79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app