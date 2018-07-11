import firebase from "firebase";
var config = {
  apiKey: "AIzaSyAW0gApr0GZjQz5WtQIacZy2WM-SpqoSi4",
  authDomain: "userdetails-368d3.firebaseapp.com",
  databaseURL: "https://userdetails-368d3.firebaseio.com",
  projectId: "userdetails-368d3",
  storageBucket: "userdetails-368d3.appspot.com",
  messagingSenderId: "883659675610"
};
firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
