import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "app/redux/mappingFunctions";
import "./index.css";

class UserDetails extends React.Component {
  state = {
    id: "",
    name: "",
    username: "",
    email: ""
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedUser.name !== prevProps.selectedUser.name) {
      const { id, name, username, email } = this.props.selectedUser;
      this.setState({ id: id });
      this.setState({ name: name });
      this.setState({ username: username });
      this.setState({ email: email });
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.props.selectedUser ? (
          <div>
            <h3> user details </h3>
            <div>
              <input
                name="id"
                value={this.state.id}
                disabled
                onChange={e => this.handleChange(e)}
              />{" "}
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
            <button onClick={() => this.props.updateUserDetails(this.state)}>
              Save
            </button>
          </div>
        ) : (
          <div> No user selected </div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
