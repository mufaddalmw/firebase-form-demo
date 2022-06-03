import '../styles/globals.css'

// add firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh7SAOjgM8oIJUnzk4nXx4Sv-0Gcnsd5k",
  authDomain: "fir-form-demo-9e4f3.firebaseapp.com",
  projectId: "fir-form-demo-9e4f3",
  storageBucket: "fir-form-demo-9e4f3.appspot.com",
  messagingSenderId: "43946527156",
  appId: "1:43946527156:web:20a3a4088b1f8fa22b0ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
