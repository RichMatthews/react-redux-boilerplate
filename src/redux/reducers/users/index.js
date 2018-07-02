import { FETCHING_USERS, UPDATE_USER, FETCHING_USERS_SUCCEEDED, FETCHING_USERS_FAILED} from "../../types";
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
      }
    }
    case UPDATE_USER: {
      return {
        ...state,
        users: state.users.map(
        user =>
          user.name === action.oldName
            ? {
                ...user,
                name: action.newName
              }
            : user
         )
      }
    }
    case FETCHING_USERS_SUCCEEDED: {
      return {
        ...state,
        users: [].concat(...state.users).concat(action.userData)
      }
    }
    case FETCHING_USERS_FAILED: {
      return state
    }
    default:
      return state;
  }
};
