import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAkMhzOyOIc8K7I_taBQbHQwv-B5gqjYE0",
    authDomain: "full--clone-1cdc3.firebaseapp.com",
    databaseURL: "https://full--clone-1cdc3.firebaseio.com",
    projectId: "full--clone-1cdc3",
    storageBucket: "full--clone-1cdc3.appspot.com",
    messagingSenderId: "313383889804",
    appId: "1:313383889804:web:92673e8b875200f683c4a9",
    measurementId: "G-G3F4DKBL3X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };