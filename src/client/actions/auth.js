import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, AUTH_ADMIN, UNAUTH_ADMIN } from './types';

export function loginAdmin({ username, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/editor/login`, { username, password })
    .then(response => {
      cookie.save('token1', response.data.token, { path: '/' });
      cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: AUTH_ADMIN });
      window.location.href = CLIENT_ROOT_URL;
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
    }
  }

export function loginUser({ username, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/auth/login`, { username, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = CLIENT_ROOT_URL;
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
    }
  }

export function registerUser({ username, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/auth/register`, { username, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      cookie.save('user', response.data.user, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = CLIENT_ROOT_URL;
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

export function logoutUser(error) {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });

    window.location.href = CLIENT_ROOT_URL;
  }
}

export function logoutAdmin(error) {
  return function (dispatch) {
    dispatch({ type: UNAUTH_ADMIN });
    cookie.remove('token1', { path: '/' });
    cookie.remove('user', { path: '/' });

    window.location.href = CLIENT_ROOT_URL;
  }
}