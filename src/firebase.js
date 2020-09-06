import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD223WHTjnGGFsgyar6C4RK7ZkmoOy4P9w",
    authDomain: "facebook-clone-f47f5.firebaseapp.com",
    databaseURL: "https://facebook-clone-f47f5.firebaseio.com",
    projectId: "facebook-clone-f47f5",
    storageBucket: "facebook-clone-f47f5.appspot.com",
    messagingSenderId: "594041042917",
    appId: "1:594041042917:web:262f490c225c23077de10c",
    measurementId: "G-6ZT6DEVJ1X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;