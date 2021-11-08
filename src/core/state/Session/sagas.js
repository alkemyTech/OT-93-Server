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
} from './types';

import {
  submitLoginRequested,
  setSystemMessage,
  cleanLoginForm,
} from './actions';

function* submitLoginRequestedSagas() {

}

function* setSystemMessageSagas() {
  yield console.log('hola');
}

function* cleanLoginFormSagas() {}

export default function* userSagas() {
  yield all([
    takeLatest(SET_SYSTEM_MSG, setSystemMessageSagas),
  ]);
}
