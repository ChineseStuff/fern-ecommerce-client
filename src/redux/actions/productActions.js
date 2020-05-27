import * as types from './actionTypes';
import axios from 'axios';
import { apiCallError } from './apiStatusAction';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}
export function postProductSuccess(product) {
  return { type: types.POST_PRODUCT_SUCCESS, product };
}
export function deleteProductSuccess(sku) {
  return { type: types.DELETE_PRODUCT_SUCCESS, sku };
}
export function loadingData() {
  return { type: types.LOADING_DATA };
}
export function loadingUI() {
  return { type: types.LOADING_UI };
}
export function setErrors(errors) {
  return { type: types.SET_ERRORS, errors };
}
export function clearErrors() {
  return { type: types.CLEAR_ERRORS };
}
export const getProducts = () => dispatch => {
  dispatch(loadingData());
  axios
    .get('/products')
    .then(res => {
      dispatch(loadProductsSuccess(res.data));
    })
    .catch(err => {
      dispatch(apiCallError());
      throw err;
    });
};
export const addProduct = product => dispatch => {
  dispatch(loadingUI());
  axios
    .post('/product', product)
    .then(res => {
      dispatch(postProductSuccess(res.data));
      dispatch(clearErrors());
    })
    .catch(err => {
      dispatch(setErrors(err.response.data));
    });
};
export const deleteProduct = sku => dispatch => {
  axios
    .delete(`/product/${sku}`)
    .then(res => {
      dispatch(deleteProductSuccess(sku));
    })
    .catch(err => console.log(err));
};
