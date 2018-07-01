import Types from '../../types';
const initialState = {
  users: []
}

export default(state = initialState, action) => {
  switch(action.type){
    case Types.FETCH_USERS: {
      return [
        ...state.users,
        action.users
      ]
    }
    default:
      return state;
  }
}
