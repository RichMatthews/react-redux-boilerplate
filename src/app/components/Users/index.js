import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "app/components/hocs/Loading";
import {
  fetchingUsers,
  fetchUsers,
  deleteUser,
} from "app/redux/actionCreators/users";
import { selectUser } from "app/redux/actionCreators/userDetails";
import "./index.css";

class Users extends React.Component {
  state = {
    users: [],
    name: "",
    oldName: "",
    showUsers: false,
  };

  toggleDisplayUsers = () => {
    this.setState({showUsers: !this.state.showUsers})
  }

  render() {
    const { users } = this.props;
    return (
      <div>
      <button onClick={this.toggleDisplayUsers}>show users</button>
      <div className={`${this.state.showUsers ? 'showUsers': ''} users-container`}>
          {users.map(user => (
            <div className="user">
              <div>{user.name}</div>{" "}
              <button onClick={() => this.props.selectUser(user)}>
                Update
              </button>
              <button
                onClick={() =>
                  this.props.deleteUser(user)
                }
              >
                Delete
              </button>
            </div>
          ))}
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
      selectUser,
      deleteUser,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading(Users)('users'));
