import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO4NZBsVIY1jpkZeUVjA6Jhxc6tWenc4A",
  authDomain: "form-e6bb2.firebaseapp.com",
  projectId: "form-e6bb2",
  storageBucket: "form-e6bb2.appspot.com",
  messagingSenderId: "836248506824",
  appId: "1:836248506824:web:d1332a1a72fec3369530fd",
  measurementId: "G-S6JY2831SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;