import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCL_ldBcCX0UMHkD1aJ3ITkIegsCa_NSHg",
  authDomain: "uber-eats-clone-366920.firebaseapp.com",
  projectId: "uber-eats-clone-366920",
  storageBucket: "uber-eats-clone-366920.appspot.com",
  messagingSenderId: "207968557143",
  appId: "1:207968557143:web:faf3be9d6240af661d6b12",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
