import { USER_SELECTED } from "app/redux/types";

export const selectUser = user => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECTED, user: user });
  };
};
