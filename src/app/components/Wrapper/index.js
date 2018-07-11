import React from "react";
import Users from "app/components/Users";
import UserDetails from "app/components/UserDetails";
import firebase from "firebase";
import "app/config";
import "./index.css";

const pullFromFirebase = () => {
  return firebase
    .database()
    .ref("/")
    .once("value")
    .then(snapshot => {
      console.log(snapshot.val(), "users");
    });
};

const component = () => (
  <div className="wrapper-container">
    {" "}
    <Users />
    <UserDetails />
  </div>
);

export default component;
