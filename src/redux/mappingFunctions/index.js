import Types from "../types";
import { bindActionCreators } from "redux";
import { fetchingUsers, fetchUsers, updateUser } from "../actionCreators/users";

export const mapStateToProps = state => ({
  users: state.users
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      updateUser,
      fetchingUsers
    },
    dispatch
  );
