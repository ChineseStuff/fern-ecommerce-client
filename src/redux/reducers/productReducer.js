import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(
  state = initialState.productsData,
  action
) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        isLoading: false,
      };
    case types.LOADING_DATA:
      return { ...state, isLoading: true };
    case types.API_CALL_ERROR:
      return { ...state, isLoading: false };
    case types.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [action.product, ...state.products],
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(item => item.sku !== action.sku),
      };
    default:
      return state;
  }
}
