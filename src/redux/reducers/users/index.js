import { FETCH_USERS, UPDATE_USER } from "../../types";
const initialState = [];

export default (state = initialState, action) => {
  console.log(state, "ssssss");
  switch (action.type) {
    case FETCH_USERS: {
      return [].concat(...state).concat(action.userData);
    }
    case UPDATE_USER: {
      return state.map(
        user =>
          user.name === action.oldName
            ? {
                ...user,
                name: action.newName
              }
            : user
      );
    }
    default:
      return state;
  }
};
