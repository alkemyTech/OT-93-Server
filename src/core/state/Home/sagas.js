import { all, put, takeLatest } from 'redux-saga/effects';

import get from 'lodash/get';

import { FETCH_ORGANIZATION_REQUESTED, FETCH_SLIDES_REQUESTED } from './types';

import { fetchOrganizationSucceeded, fetchSlidesSucceeded } from './actions';

import { ORGANIZATION, SLIDES } from '../../../Services/Urls';
import { Get } from '../../../Services/privateApiService';

function* fetchOrganizationRequestedSagas() {
  try {
    const response = yield Get(`${ORGANIZATION}`);
    const data = get(response.data, 'data');
    yield put(fetchOrganizationSucceeded(data));
  } catch (err) {
    throw Error(err);
  }
}

function* fetchSlidesRequestedSagas() {
  try {
    const response = yield Get(`${SLIDES}`);
    const data = get(response.data, 'data');
    yield put(fetchSlidesSucceeded(data));
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(FETCH_ORGANIZATION_REQUESTED, fetchOrganizationRequestedSagas),
    takeLatest(FETCH_SLIDES_REQUESTED, fetchSlidesRequestedSagas),
  ]);
}
