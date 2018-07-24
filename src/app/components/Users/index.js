import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "app/redux/mappingFunctions";
import Loading from "app/components/Loading";
import "./index.css";

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
    const { users } = this.props;
    return (
      <div>
        <h3> Users </h3>
        {users.loading ? <Loading /> : null}
        {users && users.length > 0 ? (
          users.map(user => (
            <div className="user">
              <div>{user.name}</div>{" "}
              <button onClick={() => this.props.selectUser(user)}>
                Update
              </button>
              <button
                onClick={() =>
                  this.props.deleteUserFromStoreThenUpdateFirebase(user)
                }
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div>{users.error}</div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
