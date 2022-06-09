import '../styles/globals.css'

// add firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getConfig from "next/config";

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side

// Will be available on both server-side and client-side
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: publicRuntimeConfig.APIKEY,
  authDomain: publicRuntimeConfig.AUTHDOMAIN,
  databaseURL: publicRuntimeConfig.DATABASEURL,
  projectId: publicRuntimeConfig.PROJECTID,
  storageBucket: publicRuntimeConfig.STORAGEBUCKET,
  messagingSenderId: publicRuntimeConfig.MESSAGINGSENDERID,
  appId: publicRuntimeConfig.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
