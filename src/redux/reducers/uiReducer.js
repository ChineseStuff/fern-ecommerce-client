import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function uiReducer(state = initialState.UI, action) {
  switch (action.type) {
    case types.SET_ERRORS:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    case types.CLEAR_ERRORS:
      return initialState.UI;
    case types.LOADING_UI:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
