import * as types from '../actions/actionTypes';
import axios from 'axios';

export function showCart() {
  return { type: types.SHOW_CART };
}
export function addToCartSuccess(product) {
  return { type: types.ADD_TO_CART_SUCCESS, product };
}
export function removeFromCartSuccess(sku) {
  return { type: types.REMOVE_FROM_CART_SUCCESS, sku };
}
export function decreseFromCartSuccess(sku) {
  return { type: types.DECRESE_FROM_CART_SUCCESS, sku };
}

export const addToCart = product => dispatch => {
  axios
    .get(`/product/${product.sku}/addToCart`)
    .then(res => {
      dispatch(addToCartSuccess(product));
    })
    .catch(err => console.log(err));
};
export const decreseFromCart = sku => dispatch => {
  axios
    .get(`/product/${sku}/decreseFromCart`)
    .then(res => {
      dispatch(decreseFromCartSuccess(sku));
    })
    .catch(err => console.log(err));
};
export const removeFromCart = sku => dispatch => {
  axios
    .get(`/product/${sku}/removeFromCart`)
    .then(res => {
      dispatch(removeFromCartSuccess(sku));
    })
    .catch(err => console.log(err));
};
