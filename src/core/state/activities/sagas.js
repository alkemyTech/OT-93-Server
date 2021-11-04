/* eslint-disable no-empty-function */
/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */

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
  setSystemMessage,
} from './actions';

import { ACTIVITIES } from '../../../Services/Urls';
import { Get, Post, Patch } from '../../../Services/privateApiService';

function* submitActivitieRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;

  if (!id) {
    yield Post(`${ACTIVITIES}`, {
      name,
      image,
      description,
    }).then((e) => console.log(e));
    yield put(
      setSystemMessage({ icon: 'success', title: 'Activity created correctly' })
    );
  }
  if (id) {
    const data = {
      name,
      image,
      description,
    };

    const response = yield Patch(ACTIVITIES, id, data);
    console.log(response);
    yield put(
      setSystemMessage({
        icon: 'success',
        title: 'Activity modified correctly',
      })
    );
  }
}

function* fetchActivitiesRequestedSagas({ id }) {
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
}

function* deleteActivitieRequestedSagas() {}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_ACTIVITIES_REQUESTED, submitActivitieRequestedSagas),
    takeLatest(FETCH_ACTIVITIES_REQUESTED, fetchActivitiesRequestedSagas),
    takeLatest(DELETE_ACTIVITIES_REQUESTED, deleteActivitieRequestedSagas),
  ]);
}
