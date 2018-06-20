import { LOCATION_CHANGE } from 'react-router-redux';
import Types from '../../types';
import data from '../../../data';
const initialState = [];

export default(state = initialState, action) => {
  console.log(action);
  switch(action.type){
    case Types.SHOW_PRODUCTS: {
      try{
        switch(action.filter.type){
          case 'color': {
            const productsToShow = data.filter(category => category.link === action.category);
            const filteredProducts = productsToShow[0].products.filter(products => products[action.filter.type] === action.filter.value)
            return filteredProducts;
          }
          case 'cost': {
            const productsToShow = data.filter(category => category.link === action.category);
            const filteredProducts = productsToShow[0].products.filter(products => products[action.filter.type] <= action.filter.value)
            return filteredProducts;
          }
          default:
            let productsToShow = data.filter(category => category.link === action.category);
            const newState = [].concat(productsToShow[0].products);
            return newState;
        }
      }
      catch(e){
        return state
      }
    }
    default:
      return state;
  }
}
