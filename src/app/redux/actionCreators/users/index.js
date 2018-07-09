import axios from "axios";
import {
  UPDATE_USER_DETAILS,
  FETCHING_USERS,
  DELETE_USER,
  FETCHING_USERS_FAILED,
  FETCHING_USERS_SUCCEEDED
} from "app/redux/types";

export const fetchingUsers = () => {
  return async dispatch => {
    dispatch({ type: FETCHING_USERS });
  };
};

export const fetchUsers = () => {
  const request = axios.get("https://jsonplaceholder.typicode.com/users");

  return async (dispatch, getState) => {
    try {
      const users = await request;
      const userData = users.data;
      dispatch({ type: FETCHING_USERS_SUCCEEDED, userData });
    } catch (err) {
      dispatch({ type: FETCHING_USERS_FAILED, err });
    }
  };
};

export const updateUserDetails = updatedUser => {
  return {
    type: UPDATE_USER_DETAILS,
    updatedUser
  };
};

export const deleteUser = user => {
  return {
    type: DELETE_USER,
    user
  };
};
