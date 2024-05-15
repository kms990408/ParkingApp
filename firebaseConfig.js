// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, onValue  } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaA892aBTWsWn8yALUn3JD8FbF5jQuTcM",
  authDomain: "license-d68c6.firebaseapp.com",
  databaseURL: "https://license-d68c6-default-rtdb.firebaseio.com",
  projectId: "license-d68c6",
  storageBucket: "license-d68c6.appspot.com",
  messagingSenderId: "920802157990",
  appId: "1:920802157990:web:1afd2ec8c7c3a61e69db67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { getDatabase, ref, get, onValue, db  }; // 변경된 부분
export default app;