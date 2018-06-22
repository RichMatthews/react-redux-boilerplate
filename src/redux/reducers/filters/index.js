import Types from '../../types';
const initialState = ''

export default(state = initialState, action) => {
  switch(action.type){
    case Types.FILTER_UPDATED: {
      return ''
    }
    default:
      return state;
  }
}
