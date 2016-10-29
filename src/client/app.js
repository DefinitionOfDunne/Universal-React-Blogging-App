import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import cookie from 'react-cookie';
import reducers from './reducers/index';
import { AUTH_ADMIN } from './actions/types';
import { AUTH_USER } from './actions/types';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const userToken = cookie.load('token');
const adminToken = cookie.load('token1');

if (userToken) {
  store.dispatch({ type: AUTH_USER });
}

if (adminToken) {
  store.dispatch({ type: AUTH_ADMIN });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} /> 
  </Provider>,   
  document.getElementById('root'));




