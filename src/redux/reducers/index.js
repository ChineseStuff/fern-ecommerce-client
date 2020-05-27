import { combineReducers } from 'redux';
import productsData from './productReducer';
import user from './userReducer';
import UI from './uiReducer';

const rootReducer = combineReducers({
  productsData,
  user,
  UI,
});

export default rootReducer;
