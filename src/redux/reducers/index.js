import { combineReducers } from 'redux';
import chosenCategory from './chosenCategory';
import productsToRender from './productsToRender';
import filters from './filters';

const rootReducer = combineReducers({
  chosenCategory,
  productsToRender,
  filters
});

export default rootReducer;
