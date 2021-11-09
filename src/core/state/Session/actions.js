/* eslint-disable no-unused-vars */
import {
  SUBMIT_LOGIN_REQUESTED,
  CLEAN_LOGIN_FORM,
  SET_SYSTEM_MSG,
  SET_NEWS_LETTER,
  SET_NEWS_LETTER_REQUESTED,
  CHECK_SUBSCRIPTION,
} from './types';

export const submitLoginRequested = (props) => ({
  type: SUBMIT_LOGIN_REQUESTED,
  ...props,
});

export const setSystemMessage = (props) => ({
  type: SET_SYSTEM_MSG,
  ...props,
});

export const checkSubscription = (props) => ({
  type: CHECK_SUBSCRIPTION,
  ...props,
});

export const subscribeNewsLetter = (props) => ({
  type: SET_NEWS_LETTER,
  ...props,
});

export const subscribeNewsLetterRequested = (props) => ({
  type: SET_NEWS_LETTER_REQUESTED,
  ...props,
});

export const cleanLoginForm = (props) => ({
  type: CLEAN_LOGIN_FORM,
  props,
});
