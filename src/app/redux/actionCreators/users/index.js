import firebase from "firebase";
import {
  UPDATE_USER_DETAILS,
  FETCHING_USERS,
  DELETE_USER,
  FETCHING_USERS_FAILED,
  FETCHING_USERS_SUCCEEDED,
  ADD_USER,
  ADDING_USER
} from "app/redux/types";
import "app/config";

export const refresh = () => {
  window.location.reload();
};

export const pullFromFirebase = () => {
  return firebase
    .database()
    .ref("/users/")
    .once("value")
    .then(snapshot => {
      var users = [];
      let usersObj = snapshot.val();
      for (var user_id in usersObj) {
        users.push({ ...usersObj[user_id], id: user_id });
      }
      return users;
    });
};

export const deleteUserFromFirebase = ({ id, name, username, email }) => {
  return firebase
    .database()
    .ref("/users/" + id)
    .set({
      id: null
    });
};

export const writeStoreDataToFirebase = ({ name, username, email }) => {
  return firebase
    .database()
    .ref("/users/")
    .push()
    .set({
      name: name,
      username: username,
      email: email
    });
};

export const updateUserInFirebase = ({ id, name, username, email }) => {
  return firebase
    .database()
    .ref("/users/" + id)
    .set({
      id: id,
      name: name,
      username: username,
      email: email
    });
};

export const fetchingUsers = () => {
  return async dispatch => {
    dispatch({ type: FETCHING_USERS });
  };
};

export const fetchUsers = () => {
  const request = pullFromFirebase();
  return async (dispatch, getState) => {
    try {
      const users = await request;
      const userData = users;
      dispatch({ type: FETCHING_USERS_SUCCEEDED, userData });
    } catch (err) {
      dispatch({ type: FETCHING_USERS_FAILED, err });
    }
  };
};

export const updateUserDetails = updatedUser => {
  return async dispatch => {
    dispatch({ type: UPDATE_USER_DETAILS, updatedUser });
  };
};

export const updateUserDetailsThenUpdateFirebase = updatedUser => {
  return (dispatch, getState) => {
    return dispatch(updateUserDetails(updatedUser)).then(() => {
      const foundUser = getState().selectedUser;
      const userToUpdate = getState().users.users.filter(
        user => user.id === foundUser.id
      );
      return updateUserInFirebase(userToUpdate[0]);
    });
  };
};

export const addUserToStoreThenUpdateFirebase = newUser => {
  return (dispatch, getState) => {
    return dispatch(addUser(newUser)).then(() => {
      return writeStoreDataToFirebase(newUser).then(() => {
        return dispatch(addingUser()).then(() => {
          return refresh();
        });
      });
    });
  };
};

export const deleteUserFromStoreThenUpdateFirebase = user => {
  return (dispatch, getState) => {
    return dispatch(deleteUser(user)).then((hello) => {
      console.log('hello');
      return deleteUserFromFirebase(user);
    })
  };
};

export const addingUser = () => {
  return async dispatch => {
    dispatch({ type: ADDING_USER });
  };
};

export const addUser = user => {
  return async dispatch => {
    dispatch({ type: ADD_USER, newUser: user });
  };
};

export const deleteUser = user => {
  return async dispatch => {
    dispatch({ type: DELETE_USER, user: user, reqConfirm: true });
  };
};
