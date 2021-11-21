/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

import {
  SUBMIT_CONTACT_REQUESTED,
  FETCH_CONTACT_REQUESTED,
  DELETE_CONTACT_REQUESTED,
} from './types';

import {
  fetchContactSucceeded,
  fetchOneContactSucceeded,
  cleanContactForm,
  setSystemMessage,
} from './actions';

import { CONTACT } from '../../../Services/Urls';
import { Get, Post, Patch } from '../../../Services/privateApiService';
import {
  SUCCESS, ERROR, DATA_SUBMITED, ERROR_SUBMITED, ERROR_FETCHING_DATA, DATA,
} from '../../../utils/constants';

function* submitContactRequestedSagas({ payload, id }) {
  console.log(payload, id);
  const {
    name, email, phone, message,
  } = payload;
  let alertProps = '';
  try {
    if (!id) {
      yield Post(CONTACT, {
        name,
        email,
        phone,
        message,
      }).then((e) => {
        if (e.data.success) {
          return alertProps = {
            icon: SUCCESS,
            title: DATA_SUBMITED,
          };
        } if (e.data.error) {
          return (
            alertProps = {
              icon: ERROR,
              title: ERROR_SUBMITED,
            }
          );
        }
      });
      const { icon, title } = alertProps;
      yield put(setSystemMessage({
        icon,
        title,
      }));
    }
    if (id) {
      const data = {
        name,
        email,
        phone,
        message,
      };
      yield Patch(CONTACT, id, data).then((e) => {
        if (e.data.success) {
          return alertProps = {
            icon: SUCCESS,
            title: DATA_SUBMITED,
          };
        } if (e.data.error) {
          return alertProps = {
            icon: ERROR,
            title: ERROR_SUBMITED,
          };
        }
      });
      const { icon, title } = alertProps;
      yield put(setSystemMessage({
        icon,
        title,
      }));
    }
  } catch (error) {
    setSystemMessage({ icon: ERROR, title: ERROR_FETCHING_DATA });
  }
}

function* fetchContactRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${CONTACT}`);
      const documents = get(response.data, DATA);
      yield put(fetchContactSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(`${CONTACT}/${id}`);
      const entry = get(response.data, DATA);
      yield put(fetchOneContactSucceeded({ entry }));
    }
  } catch (error) {
    setSystemMessage({ icon: { ERROR }, title: { ERROR_FETCHING_DATA } });
  }
}

// eslint-disable-next-line no-empty-function
function* deleteContactRequestedSagas() {}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_CONTACT_REQUESTED, submitContactRequestedSagas),
    takeLatest(FETCH_CONTACT_REQUESTED, fetchContactRequestedSagas),
    takeLatest(DELETE_CONTACT_REQUESTED, deleteContactRequestedSagas),
  ]);
}
