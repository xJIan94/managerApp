import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL,
        LOGIN_USER,
        SIGNUP_USER,
        SIGNUP_USER_FAIL,
        SIGNUP_USER_SUCCESS,
        CLEAR_SIGNUP_FORM
      } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    };
};

export const signUpUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signupUserSuccess(dispatch, user))
      .catch(() => signupUserFail(dispatch));
    };
};

export const clearSignUpForm = () => {
  return {
    type: CLEAR_SIGNUP_FORM
  };
};

const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
     payload: user
   });

   Actions.pop();
};

const signupUserFail = (dispatch) => {
  dispatch({
      type: SIGNUP_USER_FAIL
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
     payload: user
   });

   Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({
      type: LOGIN_USER_FAIL
  });
};
