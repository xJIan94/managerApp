import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  CLEAR_SIGNUP_FORM
 } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, loading: false, error: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'LOGIN FAILED!', loading: false };
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' };
    case SIGNUP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGNUP_USER_FAIL:
      return { ...state, error: 'SIGN UP FAILED!', loading: false };
    case CLEAR_SIGNUP_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
