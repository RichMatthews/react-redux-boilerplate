import React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../redux/mappingFunctions";
import Loading from '../../components/Loading'
class Home extends React.Component {
  state = {
    users: [],
    name: "",
    oldName: ""
  };

  componentDidMount = () => {
    this.props.fetchingUsers()
    this.props.fetchUsers()
  }

  updateUserName = (e, oldName) => {
    this.setState({ name: e.target.value });
    this.setState({ oldName: oldName });
  };

  render() {
    return (
      <div>
        Home is here
        {this.props.users.users && this.props.users.users.length > 0
          ? this.props.users.users.map(user => (
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
          : <Loading />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
