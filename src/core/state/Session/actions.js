import {
  SUBMIT_LOGIN_REQUESTED,
  CLEAN_LOGIN_FORM,
  SET_SYSTEM_MSG,
} from './types';

export const submitLoginRequested = (props) => ({
  type: SUBMIT_LOGIN_REQUESTED,
  ...props,
});

export const setSystemMessage = (props) => ({
  type: SET_SYSTEM_MSG,
  ...props,
});

export const cleanLoginForm = (props) => ({
  type: CLEAN_LOGIN_FORM,
  props,
});
