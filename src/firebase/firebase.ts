// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWDyIkVDjXNmXOQyAo8wjShxrt6sm6sDE",
  authDomain: "upload-file-7242f.firebaseapp.com",
  projectId: "upload-file-7242f",
  storageBucket: "upload-file-7242f.appspot.com",
  messagingSenderId: "612665389883",
  appId: "1:612665389883:web:eee908eadbb02951fd7d1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage_bucket = getStorage(app);
