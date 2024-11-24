// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDvpf0Uu1cXiBeOUorH7tstxLqwiZ9xyo8",
//   authDomain: "rsvp-72f58.firebaseapp.com",
//   dataBaseURL: "https://rsvp-72f58-default-rtdb.europe-west1.firebasedatabase.app/",
//   // dataBaseURL: "https://rsvp-72f58-default-rtdb.firebaseio.com/",
//   projectId: "rsvp-72f58",
//   storageBucket: "rsvp-72f58.firebasestorage.app",
//   messagingSenderId: "925354357618",
//   appId: "1:925354357618:web:f59c83a0050d53d2b263eb",
//   measurementId: "G-P36YK4D7HC"
// }
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Define the Firebase configuration object
const firebaseConfig: Record<string, string | undefined> = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyA6gbBlW8VLqKKUDSNzSVixGJDN7w6d_JU",
  authDomain: "rsvp-cbbe6.firebaseapp.com",
  databaseURL: "https://rsvp-cbbe6-default-rtdb.firebaseio.com/",
  projectId: "rsvp-cbbe6",
  storageBucket: "rsvp-cbbe6.firebasestorage.app",
  messagingSenderId: "602963732715",
  appId: "1:602963732715:web:ac897c5d5af093be63b6ae"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  // Analytics can only be used in a browser environment
  analytics = getAnalytics(app);
}

export { app, analytics };