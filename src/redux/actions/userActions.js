import * as types from './actionTypes';
import { loadingUI, clearErrors, setErrors } from './uiActions';
import axios from 'axios';

export function setUserAction(user) {
  return { type: types.SET_USER, user };
}
export function setAuthenticated() {
  return { type: types.SET_AUTHENTICATED };
}
export function setUnauthenticated() {
  return { type: types.SET_UNAUTHENTICATED };
}
export function loadingUser() {
  return { type: types.LOADING_USER };
}

export const loginUser = (userData, history) => dispatch => {
  dispatch(loadingUI());
  axios
    .post('/login', userData)
    .then(response => {
      setAuthorizationHeader(response.data.token);
      dispatch(getUserData());
      dispatch(clearErrors());
      history.push('/');
    })
    .catch(error => {
      console.log(error);
      dispatch(setErrors(error.response.data));
    });
};

export const signupUser = (newUserData, history) => dispatch => {
  dispatch(loadingUI());
  axios
    .post('/signup', newUserData)
    .then(response => {
      setAuthorizationHeader(response.data.token);
      dispatch(getUserData());
      dispatch(clearErrors());
      history.push('/');
    })
    .catch(error => {
      dispatch(setErrors(error.response.data));
    });
};

export const getUserData = () => dispatch => {
  dispatch(loadingUser());
  axios
    .get('/user')
    .then(res => {
      dispatch(setUserAction(res.data));
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(setUnauthenticated());
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
