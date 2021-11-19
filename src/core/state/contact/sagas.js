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
  setSystemMessage,
} from './actions';

import { CONTACT } from '../../../Services/Urls';
import { Get, Post, Patch } from '../../../Services/privateApiService';

function* submitContactRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  let alertProps = '';
  try {
    if (!id) {
      yield Post(CONTACT, {
        name,
        image,
        description,
      }).then((e) => {
        if (e.data.success) {
          return alertProps = {
            icon: 'success',
            title: 'data submited successfully',
          };
        } if (e.data.error) {
          return (
            alertProps = {
              icon: 'error',
              title: 'there was an error submiting the data',
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
        image,
        description,
      };
      yield Patch(CONTACT, id, data).then((e) => {
        if (e.data.success) {
          return alertProps = {
            icon: 'success',
            title: 'data submited successfully',
          };
        } if (e.data.error) {
          return alertProps = {
            icon: 'error',
            title: 'there was an error submiting the data',
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
    yield console.log(error);
  }
}

function* fetchContactRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${CONTACT}`);
      const documents = get(response.data, 'data');
      yield put(fetchContactSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(`${CONTACT}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneContactSucceeded({ entry }));
    }
  } catch (error) {
    console.log(error);
    setSystemMessage({ icon: 'error', title: 'there was an error fetching the data' });
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
