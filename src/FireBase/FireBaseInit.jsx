// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBaseConfig";

const initalizeAuthentication = () => {
  // Initialize Firebase
  initializeApp(firebaseConfig);
};

export default initalizeAuthentication;
