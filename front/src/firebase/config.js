// Photo Gallery with React & Firebase
// https://www.youtube.com/watch?v=vUe91uOx7R0

import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX46Q_IF20mlEbMvFj8CVRbqrlcV6Ow-g",
  authDomain: "quoter-a859f.firebaseapp.com",
  projectId: "quoter-a859f",
  storageBucket: "quoter-a859f.appspot.com",
  messagingSenderId: "428459456544",
  appId: "1:428459456544:web:de7c1d294f1dbd4f30e445",
  measurementId: "G-DR8FK1LFMF",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
// const projectFirestore = firebase.firestore();

export { projectStorage, ref, uploadBytesResumable, getDownloadURL };
