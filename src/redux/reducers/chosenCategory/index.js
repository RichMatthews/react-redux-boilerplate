import { LOCATION_CHANGE } from 'react-router-redux';
const initialState = {
  category: '',
  product: 0
};

export default(state = initialState, action) => {
  switch(action.type){
    case LOCATION_CHANGE: {
      console.log('changed');
      const path = window.location.href;
      const categoriesRegex = /categories\/(\w+)(?=\/?)/;
      try{
        const category = path.match(categoriesRegex)[1];
        return {
          product: Number(path.split('/')[5]),
          category: category,
        }
      }
      catch(e){
        return state;
      }
    }
    default:
      return 'sport';
  }
}
