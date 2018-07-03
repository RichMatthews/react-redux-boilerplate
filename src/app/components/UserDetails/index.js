import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "app/redux/mappingFunctions";

const UserDetails = props => (
  <div>
    {console.log(props.selectedUser, "props")}
    {props.selectedUser ? (
      <div>
        <h3> user details </h3>
        <input value={props.selectedUser.id} />
        <div>id {props.selectedUser.id}</div>
        <div>name {props.selectedUser.name}</div>
        <div>username {props.selectedUser.username}</div>
        <div>email {props.selectedUser.email}</div>
      </div>
    ) : (
      <div> No user selected </div>
    )}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
