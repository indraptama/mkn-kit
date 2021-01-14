import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAdJEoWRkcXTnitYJzOha4tNDP0mCbQ0rk",
  authDomain: "mkn-client.firebaseapp.com",
  databaseURL: "https://mkn-client-default-rtdb.firebaseio.com",
  projectId: "mkn-client",
  storageBucket: "mkn-client.appspot.com",
  messagingSenderId: "401104101494",
  appId: "1:401104101494:web:a7c635fc3c8c3fe6fdff57"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// if (location.hostname === "localhost") {
//   db.useEmulator("localhost", 8080);
//   firebase.auth().useEmulator('http://localhost:9099/');
// }

export default db;