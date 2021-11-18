/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

import {
  SUBMIT_LOGIN_REQUESTED,
  CLEAN_LOGIN_FORM,
  SET_SYSTEM_MSG,
  SET_NEWS_LETTER,
  CHECK_SUBSCRIPTION,
  SET_NEWS_LETTER_REQUESTED,
} from './types';

import {
  submitLoginRequested,
  setSystemMessage,
  cleanLoginForm,
  subscribeNewsLetter,
} from './actions';

function* submitLoginRequestedSagas() {}

function* setSystemMessageSagas() {
  yield console.log('');
}

function* cleanLoginFormSagas() {}

function* newsLetterSagasCheck() {
  if (window.localStorage.getItem('subscribed')) {
    yield put(subscribeNewsLetter());
  }
}

function* newsLetterSagasSubscription({ payload }) {
  yield put(subscribeNewsLetter());
  yield window.localStorage.setItem('subscribed', payload.email);
  yield put(
    setSystemMessage({ icon: 'success', title: 'subscribed successfully' }),
  );
}

export default function* userSagas() {
  yield all([
    takeLatest(SET_SYSTEM_MSG, setSystemMessageSagas),
    takeLatest(CHECK_SUBSCRIPTION, newsLetterSagasCheck),
    takeLatest(SET_NEWS_LETTER_REQUESTED, newsLetterSagasSubscription),
  ]);
}
