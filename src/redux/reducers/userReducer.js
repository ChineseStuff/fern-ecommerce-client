import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.SET_AUTHENTICATED:
      return { ...state, authenticated: true };
    case types.SET_UNAUTHENTICATED:
      return initialState.user;
    case types.SET_USER:
      return { ...state, authenticated: true, loading: false, ...action.user };
    case types.LOADING_USER:
      return { ...state, authenticated: true, loading: true };
    case types.SHOW_CART:
      return { ...state, isCartOpen: !state.isCartOpen };
    case types.ADD_TO_CART_SUCCESS:
      const isAdded = state.cart.find(item => item.sku === action.product.sku);
      if (!isAdded) action.product.qty = 1;
      return {
        ...state,
        cart: !isAdded
          ? [action.product, ...state.cart]
          : state.cart.map(item =>
              item.sku === action.product.sku
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
      };
    case types.DECRESE_FROM_CART_SUCCESS:
      let newCart = state.cart.map(item =>
        item.sku === action.sku ? { ...item, qty: item.qty - 1 } : item
      );
      return {
        ...state,
        cart: newCart,
      };
    case types.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        cart: state.cart.filter(item => item.sku !== action.sku),
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        cart: state.cart.filter(item => item.sku !== action.sku),
      };
    default:
      return state;
  }
}
