import { USER_SELECTED_UPDATED } from "app/redux/types";

export const selectUser = user => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SELECTED_UPDATED, user: user });
  };
};
