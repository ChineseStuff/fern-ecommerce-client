import * as types from './actionTypes';

export function loadingUI() {
  return { type: types.LOADING_UI };
}
export function clearErrors() {
  return { type: types.CLEAR_ERRORS };
}
export function setErrors(errors) {
  return { type: types.SET_ERRORS, errors };
}
