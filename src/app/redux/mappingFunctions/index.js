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

export const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.loading,
  selectedUser: state.selectedUser
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
