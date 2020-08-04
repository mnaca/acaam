import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtM_oHR7LZWMSUCee5Zbq-mkvKnRjXkc8",
  authDomain: "mnaca-b9aab.firebaseapp.com",
  databaseURL: "https://mnaca-b9aab.firebaseio.com",
  projectId: "mnaca-b9aab",
  storageBucket: "mnaca-b9aab.appspot.com",
  messagingSenderId: "573036324840",
  appId: "1:573036324840:web:91dd4c605bacdacf36a65d",
  measurementId: "G-ZEHR24V2F8"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};