import { bindActionCreators } from "redux";
import {
  fetchingUsers,
  fetchUsers,
  updateUser
} from "app/redux/actionCreators/users";
import { selectUser } from "app/redux/actionCreators/userDetails";

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
