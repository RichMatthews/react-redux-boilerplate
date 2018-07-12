import {
  FETCHING_USERS,
  DELETE_USER,
  UPDATE_USER_DETAILS,
  FETCHING_USERS_SUCCEEDED,
  FETCHING_USERS_FAILED,
  ADD_USER
} from "app/redux/types";
const initialState = {
  users: [],
  loading: false,
  error: ""
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
    case ADD_USER: {
      console.log(action, " the actuion");
      return {
        ...state,
        users: [].concat(...state.users).concat(action.newUser)
      };
    }
    case FETCHING_USERS_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        users: [].concat(...state.users).concat(action.userData)
      };
    }
    case FETCHING_USERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: "404 - Request to fetch users failed"
      };
    }
    default:
      return state;
  }
};
