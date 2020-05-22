import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.SET_AUTHENTICATED:
      return { ...state, authenticated: true };
    case types.SET_UNAUTHENTICATED:
      return initialState.user;
    case types.SET_USER:
      return { authenticated: true, loading: false, ...action.user };
    case types.LOADING_USER:
      return { authenticated: true, loading: true };
    default:
      return state;
  }
}
