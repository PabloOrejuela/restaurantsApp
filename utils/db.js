import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAd-C-8HaJWw3jukx62Tr_WBud1YONSork",
    authDomain: "restaurants-c2380.firebaseapp.com",
    projectId: "restaurants-c2380",
    storageBucket: "restaurants-c2380.appspot.com",
    messagingSenderId: "246675275960",
    appId: "1:246675275960:web:9a61825d947446c285744d"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);