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
} from './actions';

import { setSystemMessage } from '../Session/actions';

import { CATEGORIES } from '../../../Services/Urls';
import { SUCCESS, ERROR } from '../../../utils/constants';
import {
  Get, Post, Patch, Delete,
} from '../../../Services/privateApiService';

function* submitCategoriesRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  let alertProps = '';
  try {
    if (!id) {
      yield Post(CATEGORIES, {
        name,
        image,
        description,
      }).then((e) => {
        if (e.data.success) {
          alertProps = {
            icon: SUCCESS,
            title: e.data.message,
          };
        } if (e.data.error) {
          alertProps = {
            icon: ERROR,
            title: e.data.error,
          };
        }
        return alertProps;
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
          alertProps = {
            icon: SUCCESS,
            title: e.data.message,
          };
        } if (e.data.error) {
          alertProps = {
            icon: ERROR,
            title: e.data.error,
          };
        }
        return alertProps;
      });
      const { icon, title } = alertProps;
      yield put(setSystemMessage({
        icon,
        title,
      }));
    }
  } catch (error) {
    yield error;
  }
}

function* fetchCategoriesRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(CATEGORIES);
      const documents = get(response, 'data');
      yield put(fetchCategoriesSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(CATEGORIES, id);
      const entry = get(response.data, 'data');
      yield put(fetchOneCategoriesSucceeded({ entry }));
    }
  } catch (error) {
    throw Error(error);
  }
}

function* deleteCategorieSagas({ id }) {
  try {
    yield Delete(CATEGORIES, id);
    yield put(fetchCategoriesSucceeded);
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_CATEGORIES_REQUESTED, submitCategoriesRequestedSagas),
    takeLatest(FETCH_CATEGORIES_REQUESTED, fetchCategoriesRequestedSagas),
    takeLatest(DELETE_CATEGORIES_REQUESTED, deleteCategorieSagas),
  ]);
}
