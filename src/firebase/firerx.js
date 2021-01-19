import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import { authState } from "rxfire/auth";
import { collectionData } from "rxfire/firestore";
import { filter } from "rxjs/operators";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAdJEoWRkcXTnitYJzOha4tNDP0mCbQ0rk",
  authDomain: "mkn-client.firebaseapp.com",
  databaseURL: "https://mkn-client-default-rtdb.firebaseio.com",
  projectId: "mkn-client",
  storageBucket: "mkn-client.appspot.com",
  messagingSenderId: "401104101494",
  appId: "1:401104101494:web:a7c635fc3c8c3fe6fdff57",
});


const firestore = firebase.firestore(app); // Initialize firestore
const auth = firebase.auth(app); // Initialize firebase auth
const loggedIn$ = authState(auth).pipe(filter((user) => !!user)); // Observable only return when user is logged in.
export { app, auth, firestore, collectionData, loggedIn$ };
export default firebase;
