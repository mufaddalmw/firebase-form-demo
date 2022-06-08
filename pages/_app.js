import '../styles/globals.css'

// add firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getConfig from "next/config";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side

// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.APIKEY)

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: publicRuntimeConfig.APIKEY,
  authDomain: "fir-form-demo-9e4f3.firebaseapp.com",
  databaseURL: "https://fir-form-demo-9e4f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-form-demo-9e4f3",
  storageBucket: "fir-form-demo-9e4f3.appspot.com",
  messagingSenderId: "43946527156",
  appId: "1:43946527156:web:20a3a4088b1f8fa22b0ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
