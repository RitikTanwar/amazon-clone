import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKD3ASoKdspOUk9YszuuFHO98HnTpKDiA",
    authDomain: "clone-fb8ef.firebaseapp.com",
    databaseURL: "https://clone-fb8ef.firebaseio.com",
    projectId: "clone-fb8ef",
    storageBucket: "clone-fb8ef.appspot.com",
    messagingSenderId: "623400824121",
    appId: "1:623400824121:web:a612c5b69e2375d468cce8",
    measurementId: "G-NCSR6QFP22"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };