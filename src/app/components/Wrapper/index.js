import React from "react";
import Users from "app/components/Users";
import UserDetails from "app/components/UserDetails";
import NewUser from "app/components/NewUser";
import "./index.css";

const component = () => (
  <div className="wrapper-container">
    {" "}
    <Users />
    <UserDetails />
    <NewUser />
  </div>
);

export default component;
