import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7ESTgOyCzPh1cDQS_IILsgb43PSRNbzQ",
  authDomain: "firegram-1c3f6.firebaseapp.com",
  projectId: "firegram-1c3f6",
  storageBucket: "firegram-1c3f6.appspot.com",
  messagingSenderId: "475589830725",
  appId: "1:475589830725:web:d9e885bcd818dc6ac0db2c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };