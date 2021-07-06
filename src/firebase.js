import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfa8q11pnrQVlcae8x4dwTSxbzurgijA8",
    authDomain: "firechat-36b21.firebaseapp.com",
    projectId: "firechat-36b21",
    storageBucket: "firechat-36b21.appspot.com",
    messagingSenderId: "1035087364640",
    appId: "1:1035087364640:web:a5d70b07ece77d752bb245",
    measurementId: "G-WVBLQTD797"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};