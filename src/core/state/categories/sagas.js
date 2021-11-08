/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

import {
  SUBMIT_CATEGORIES_REQUESTED,
  FETCH_CATEGORIES_REQUESTED,
  DELETE_CATEGORIES_REQUESTED,
} from './types';

import {
  fetchCategoriesSucceeded,
  fetchOneCategoriesSucceeded,
  setSystemMessage,
} from './actions';

import { CATEGORIES } from '../../../Services/Urls';
import { Get, Post, Patch } from '../../../Services/privateApiService';

function* submitCategoriesRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  let alertProps = '';
  try {
    if (!id) {
      yield Post(`${CATEGORIES}`, {
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
      yield Patch(CATEGORIES, id, data).then((e) => {
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

function* fetchCategoriesRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${CATEGORIES}`);
      const documents = get(response.data, 'data');
      yield put(fetchCategoriesSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(`${CATEGORIES}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneCategoriesSucceeded({ entry }));
    }
  } catch (error) {
    console.log(error);
    setSystemMessage({ icon: 'error', title: 'there was an error fetching the data' });
  }
}

// eslint-disable-next-line no-empty-function
function* deleteCategoriesRequestedSagas() {}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_CATEGORIES_REQUESTED, submitCategoriesRequestedSagas),
    takeLatest(FETCH_CATEGORIES_REQUESTED, fetchCategoriesRequestedSagas),
    takeLatest(DELETE_CATEGORIES_REQUESTED, deleteCategoriesRequestedSagas),
  ]);
}
