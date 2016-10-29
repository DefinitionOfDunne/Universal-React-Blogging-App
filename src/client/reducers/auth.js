
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_ADMIN, UNAUTH_ADMIN } from '../actions/types';

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false, admin: false };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_ADMIN:
      return { ...state, error: '', message: '', authenticated: false, admin: true };
    case UNAUTH_ADMIN:
      return { ...state, authenticated: false, admin: false };      
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };      
  }

  return state;
}