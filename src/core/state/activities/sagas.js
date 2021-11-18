/* eslint-disable no-console */
import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

import {
  SUBMIT_ACTIVITIES_REQUESTED,
  FETCH_ACTIVITIES_REQUESTED,
  DELETE_ACTIVITIES_REQUESTED,
} from './types';

import {
  fetchActivitiesSucceeded,
  fetchOneActivitiesSucceeded,
} from './actions';
import { ACTIVITIES } from '../../../Services/Urls';
import { ERROR, SUCCESS } from '../../../utils/constants';
import { setSystemMessage } from '../Session/actions';
import { ACTIVITIES } from '../../../Services/Urls';
import { Get, Post, Patch } from '../../../Services/privateApiService';

function* submitActivitieRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  let alertProps;
  try {
    if (!id) {
      yield Post(ACTIVITIES, {
        name, image, description,
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

      yield Patch(ACTIVITIES, id, data).then((e) => {
        if (e.data.success) {
          alertProps = {
            icon: SUCCESS,
            title: e.data.message,
          };
        } if (e.data.error) {
          alertProps = {
            icon: ERROR,
            title: e.data.message,
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

function* fetchActivitiesRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${ACTIVITIES}`);

      const documents = get(response.data, 'data');
      yield put(fetchActivitiesSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(`${ACTIVITIES}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneActivitiesSucceeded({ entry }));
    }
  } catch (error) {
    throw Error(error);
  }
}

// eslint-disable-next-line no-empty-function
function* deleteActivitieRequestedSagas() {}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_ACTIVITIES_REQUESTED, submitActivitieRequestedSagas),
    takeLatest(FETCH_ACTIVITIES_REQUESTED, fetchActivitiesRequestedSagas),
    takeLatest(DELETE_ACTIVITIES_REQUESTED, deleteActivitieRequestedSagas),
  ]);
}
