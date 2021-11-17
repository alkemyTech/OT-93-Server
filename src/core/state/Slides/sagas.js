/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';

import get from 'lodash/get';

import {
  Get,
  Post,
  Patch,
  Delete,
} from '../../../Services/privateApiService';

import {
  SLIDES,
} from '../../../Services/Urls';

import {
  getRoutes,
} from '../../../utils';

import {
  SUBMIT_SLIDE_REQUESTED,
  FETCH_SLIDE_REQUESTED,
  DELETE_SLIDE_REQUESTED,
} from './types';

import {
  fetchSlideSucceeded,
  fetchOneSlideSucceeded,
  fetchSlideRequested,
} from './actions';

import { setSystemMessage } from '../Session/actions';

function* submitSlideRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  let alertProps = '';
  try {
    if (!id) {
      yield Post(SLIDES, {
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
      yield Patch(SLIDES, id, data).then((e) => {
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

function* fetchSlideRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${SLIDES}`);
      const documents = get(response.data, 'data');
      yield put(fetchSlideSucceeded({ documents }));
    }
    if (id) {
      const response = yield get(`${SLIDES}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneSlideSucceeded({ entry }));
    }
  } catch (error) {
    console.log(error);
    setSystemMessage({ icon: 'error', title: 'there was an error fetching the data' });
  }
}

function* deleteSlideRequestedSagas({ id }) {
  try {
    yield Delete(`${SLIDES}/${id}`);
    yield put(fetchSlideRequested());
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_SLIDE_REQUESTED, submitSlideRequestedSagas),
    takeLatest(FETCH_SLIDE_REQUESTED, fetchSlideRequestedSagas),
    takeLatest(DELETE_SLIDE_REQUESTED, deleteSlideRequestedSagas),
  ]);
}
