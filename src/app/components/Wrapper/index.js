import React from "react";
import Users from "app/components/Users";
import UserDetails from "app/components/UserDetails";
import "./index.css";

const component = () => (
  <div className="wrapper-container">
    {" "}
    <Users />
    <UserDetails />
  </div>
);

export default component;
