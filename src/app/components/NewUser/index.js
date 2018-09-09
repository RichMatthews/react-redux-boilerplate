import React from "react";
import { connect } from "react-redux";
import Loading from "app/components/hocs/Loading";
import { bindActionCreators } from "redux";
import {
  fetchingUsers,
  fetchUsers,
  updateUserDetailsThenUpdateFirebase,
  addUserToStoreThenUpdateFirebase,
  deleteUser,
  deleteUserFromStoreThenUpdateFirebase
} from "app/redux/actionCreators/users";
import { selectUser } from "app/redux/actionCreators/userDetails";

class NewUser extends React.Component {
  state = {
    name: "",
    username: "",
    email: ""
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { users } = this.props;
    return (
      <div>
          <div>
            <h3> Add new user </h3>
            <div>
              <input
                name="id"
                placeholder="user id generated on the fly"
                disabled
              />{" "}
            </div>
            <div>
              <input
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />{" "}
            </div>
            <div>
              <input
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />{" "}
            </div>
            <div>
              <input
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />{" "}
            </div>
            <button
              onClick={() =>
                this.props.addUserToStoreThenUpdateFirebase(this.state)
              }
            >
              Add User
            </button>
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
      selectUser,
      deleteUserFromStoreThenUpdateFirebase,
      updateUserDetailsThenUpdateFirebase,
      addUserToStoreThenUpdateFirebase
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUser);
