import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBT8xVubb1PHm6dqKKgAqRTlVifmw0tc2I",
    authDomain: "all-news-8.firebaseapp.com",
    databaseURL: "https://all-news-8.firebaseio.com",
    projectId: "all-news-8",
    storageBucket: "all-news-8.appspot.com",
    messagingSenderId: "294845320116",
    appId: "1:294845320116:web:92f7285c8bae79f28680e1"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  export default firebaseApp;
