import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../redux/mappingFunctions";
import Loading from "../../components/Loading";

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

  updateUserName = (e, oldName) => {
    this.setState({ name: e.target.value });
    this.setState({ oldName: oldName });
  };

  render() {
    return (
      <div>
        <h3> Users </h3>
        {this.props.users.users && this.props.users.users.length > 0 ? (
          this.props.users.users.map(user => (
            <div>
              <div>{user.name}</div>{" "}
              <input
                placeholder="enter new name"
                onChange={e => this.updateUserName(e, user.name)}
              />
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
