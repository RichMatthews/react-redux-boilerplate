import React from "react";
import { bindActionCreators } from "redux";
import Users from "app/components/Users";
import UserDetails from "app/components/UserDetails";
import NewUser from "app/components/NewUser";
import { connect } from "react-redux";
import {
  fetchingUsers,
  fetchUsers,
} from "app/redux/actionCreators/users";
import "./index.css";

class Wrapper extends React.Component {
  componentDidMount() {
    this.props.fetchingUsers();
    this.props.fetchUsers();
  }
  render(){
    return(
        <div className="wrapper-container">
          <div>
            <h3> Users </h3>
            <Users />
          </div>
          <div className="current-user-container">
            <UserDetails />
            <NewUser />
          </div>
        </div>
      );
  }

}

export const mapStateToProps = state => ({
  users: state.users.users,
});


export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      fetchingUsers,
    },
    dispatch
  );

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
