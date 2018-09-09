import firebase from "firebase";
var config = {
    apiKey: "AIzaSyAy8b-VR6mu5sKPUY4I44-CcGF2ixGE724",
    authDomain: "my-test-project-beb7f.firebaseapp.com",
    databaseURL: "https://my-test-project-beb7f.firebaseio.com",
    projectId: "my-test-project-beb7f",
    storageBucket: "my-test-project-beb7f.appspot.com",
    messagingSenderId: "253185074973"
  };
firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
