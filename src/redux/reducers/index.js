import { combineReducers } from 'redux';
import products from './productReducer';
import user from './userReducer';
import UI from './uiReducer';

const rootReducer = combineReducers({
  products,
  user,
  UI,
});

export default rootReducer;
