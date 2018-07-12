import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "app/redux/mappingFunctions";

class NewUser extends React.Component {
  state = {
    name: "",
    username: "",
    id: 0,
    email: ""
  };

  componentDidMount = () => {
    setTimeout(
      function() {
        const newUserId = this.props.users.users.length;
        this.setState({ id: newUserId });
      }.bind(this),
      1000
    );
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { users } = this.props;
    console.log(users, "the users");
    return (
      <div>
        {users && users.length > 1 ? (
          <div>
            <h3> Add new user </h3>
            <div>
              <input name="id" value={this.state.id} disabled />{" "}
            </div>
            <div>
              <input
                name="name"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />{" "}
            </div>
            <div>
              <input
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />{" "}
            </div>
            <div>
              <input
                name="email"
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
        ) : (
          <div> Loading ... </div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUser);
