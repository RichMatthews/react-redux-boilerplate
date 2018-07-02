import axios from "axios";
import { FETCH_USERS, UPDATE_USER } from "../../types";
export const fetchUsers = () => {
  const request = axios.get("https://jsonplaceholder.typicode.com/users");

  return async (dispatch, getState) => {
    const users = await request;
    const userData = users.data;
    dispatch({ type: FETCH_USERS, userData });
  };
};

export const updateUser = (oldName, newName) => {
  console.log(oldName, "oldName");
  console.log(newName, "newName");
  return {
    type: UPDATE_USER,
    oldName: oldName,
    newName: newName
  };
};
