import { USER_SELECTED_UPDATED } from "app/redux/types";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SELECTED_UPDATED: {
      return action.user;
    }
    default:
      return state;
  }
};
