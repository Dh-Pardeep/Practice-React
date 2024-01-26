
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDgcUo67Qog5EUP5Igf9V0PJENb8SE7I9Q",
    authDomain: "practice-react-340.firebaseapp.com",
    databaseURL: "https://practice-react-340-default-rtdb.firebaseio.com",
    projectId: "practice-react-340",
    storageBucket: "practice-react-340.appspot.com",
    messagingSenderId: "843051885642",
    appId: "1:843051885642:web:de7702730387172a79b2b3"
};

const app = initializeApp(firebaseConfig);
const dbrt = getDatabase(app);
const dbfs = getFirestore(app);
const auth = getAuth(app);
export { dbrt, dbfs, auth };  