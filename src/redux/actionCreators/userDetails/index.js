import { USER_SELECTED } from "../../types";

export const selectUser = user => {
  console.log(user, "user");
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECTED, user: user });
  };
};
