import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVuZ4cE6wydxGlQQy4gKrv9I9wizXKCAY",
    authDomain: "disneyplus-clone-sy.firebaseapp.com",
    projectId: "disneyplus-clone-sy",
    storageBucket: "disneyplus-clone-sy.appspot.com",
    messagingSenderId: "130770180839",
    appId: "1:130770180839:web:2d38f8d1335e507ffa6042",
    measurementId: "G-5LH8RLZWC4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth,  provider, storage};
export default db;