import axios from "axios";
import firebase from "firebase";
import {
  UPDATE_USER_DETAILS,
  FETCHING_USERS,
  DELETE_USER,
  FETCHING_USERS_FAILED,
  FETCHING_USERS_SUCCEEDED,
  ADD_USER
} from "app/redux/types";
import "app/config";

export const pullFromFirebase = () => {
  return firebase
    .database()
    .ref("/users")
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
};

export const writeStoreDataToFirebase = ({ id, name, username, email }) => {
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
      return writeStoreDataToFirebase(userToUpdate[0]);
    });
  };
};

export const addUserToStoreThenUpdateFirebase = newUser => {
  console.log(newUser, "nu");
  return (dispatch, getState) => {
    return dispatch(addUser(newUser)).then(() => {
      return writeStoreDataToFirebase(newUser);
    });
  };
};

export const addUser = user => {
  return async dispatch => {
    dispatch({ type: ADD_USER, newUser: user });
  };
};

export const deleteUser = user => {
  return {
    type: DELETE_USER,
    user
  };
};
