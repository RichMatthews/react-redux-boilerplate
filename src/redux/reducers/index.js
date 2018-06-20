import { combineReducers } from 'redux';
import chosenCategory from './chosenCategory';
import productsToRender from './productsToRender';

const rootReducer = combineReducers({
  chosenCategory,
  productsToRender
});

export default rootReducer;
