import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD0WaNN6xoYjW1WAc3xswpCK_nS1_pF7jQ",
    authDomain: "test-ee698.firebaseapp.com",
    projectId: "test-ee698",
    storageBucket: "test-ee698.appspot.com",
    messagingSenderId: "342187310937",
    appId: "1:342187310937:web:18a0b2e099a6209b6e5648"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();