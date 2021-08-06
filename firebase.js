import firebase from 'firebase';

// Firebase Connection
const firebaseConfig = {
  apiKey: 'AIzaSyBEO0WuPZb4SBKCRLtZCr8Q7nZ7ogEwTUk',
  authDomain: 'documaker-6d0d2.firebaseapp.com',
  projectId: 'documaker-6d0d2',
  storageBucket: 'documaker-6d0d2.appspot.com',
  messagingSenderId: '702876927649',
  appId: '1:702876927649:web:da67ff2899eb4fe34552e0',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
