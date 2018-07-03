import { bindActionCreators } from "redux";
import { fetchingUsers, fetchUsers, updateUser } from "../actionCreators/users";
import { selectUser } from "../actionCreators/userDetails";

export const mapStateToProps = state => ({
  users: state.users,
  selectedUser: state.selectedUser
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      updateUser,
      fetchingUsers,
      selectUser
    },
    dispatch
  );
