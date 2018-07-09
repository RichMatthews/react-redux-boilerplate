import {
  FETCHING_USERS,
  DELETE_USER,
  UPDATE_USER_DETAILS,
  FETCHING_USERS_SUCCEEDED,
  FETCHING_USERS_FAILED
} from "app/redux/types";
const initialState = {
  users: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS: {
      return {
        ...state,
        loading: true
      };
    }
    case UPDATE_USER_DETAILS: {
      return {
        ...state,
        users: state.users.map(
          user =>
            user.id === action.updatedUser.id
              ? {
                  ...user,
                  name: action.updatedUser.name,
                  username: action.updatedUser.username,
                  email: action.updatedUser.email
                }
              : user
        )
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter(u => u.id !== action.user.id)
      };
    }
    case FETCHING_USERS_SUCCEEDED: {
      return {
        ...state,
        users: [].concat(...state.users).concat(action.userData)
      };
    }
    case FETCHING_USERS_FAILED: {
      return state;
    }
    default:
      return state;
  }
};
