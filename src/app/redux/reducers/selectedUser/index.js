import { USER_SELECTED } from "app/redux/types";
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SELECTED: {
      return action.user;
    }
    default:
      return state;
  }
};
