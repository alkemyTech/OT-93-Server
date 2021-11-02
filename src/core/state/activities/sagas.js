/* eslint-disable no-console */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import {
  SUBMIT_ACTIVITIES_REQUESTED,
  FETCH_ACTIVITIES_REQUESTED,
  DELETE_ACTIVITIES_REQUESTED,
} from './types';

import {
  submitActivitiesRequested,
  fetchActivitiesSucceeded,
  fetchOneActivitiesSucceeded,
  cleanActivitiesForm,
} from './actions';

import ACTIVITIES from '../../../Services/Urls';
import { getRoutes } from '../../../utils';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

function* submitActivitieRequestedSagas() {
  yield console.log('paso el fetch');
}

function* fetchActivitiesRequestedSagas() {}

function* deleteActivitieRequestedSagas() {}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_ACTIVITIES_REQUESTED, submitActivitieRequestedSagas),
    takeLatest(FETCH_ACTIVITIES_REQUESTED, fetchActivitiesRequestedSagas),
    takeLatest(DELETE_ACTIVITIES_REQUESTED, deleteActivitieRequestedSagas),
  ]);
}
