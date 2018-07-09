import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "app/redux/mappingFunctions";
import Loading from "app/components/Loading";

class Users extends React.Component {
  state = {
    users: [],
    name: "",
    oldName: ""
  };

  componentDidMount = () => {
    this.props.fetchingUsers();
    this.props.fetchUsers();
  };

  render() {
    return (
      <div>
        <h3> Users </h3>
        {this.props.users.users && this.props.users.users.length > 0 ? (
          this.props.users.users.map(user => (
            <div>
              <div>{user.name}</div>{" "}
              <button onClick={() => this.props.selectUser(user)}>
                Update User
              </button>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
