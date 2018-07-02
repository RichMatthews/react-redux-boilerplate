import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../redux/mappingFunctions";

class Home extends React.Component {
  state = {
    users: [],
    name: "",
    oldName: ""
  };

  updateUserName = (e, oldName) => {
    this.setState({ name: e.target.value });
    this.setState({ oldName: oldName });
  };

  render() {
    return (
      <div>
        Home is here
        <button onClick={() => this.props.fetchUsers()}>Fetch Users</button>
        {this.props.users && this.props.users.length > 0
          ? this.props.users.map(user => (
              <div>
                <div>{user.name}</div>{" "}
                <input
                  placeholder="enter new name"
                  onChange={e => this.updateUserName(e, user.name)}
                />
                <button
                  onClick={() =>
                    this.props.updateUser(this.state.oldName, this.state.name)
                  }
                >
                  Update User
                </button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
