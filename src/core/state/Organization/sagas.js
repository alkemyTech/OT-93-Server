/* eslint-disable */

import { all, put, takeLatest } from 'redux-saga/effects';

import get from 'lodash/get';

import { FETCH_ORGANIZATION_REQUESTED } from './types';

import { fetchOrganizationSucceeded } from './actions';
import { setSystemMessage } from '../Session/actions';

import { ORGANIZATION } from '../../../Services/Urls';
import { Get } from '../../../Services/privateApiService';

function* fetchOrganizationRequestedSagas() {
  try {
    if (!id) {
      const response = yield Get(ORGANIZATION);
      const documents = get(response.data, 'data');
      yield put(fetchOrganizationSucceeded({ documents }));
      yield put(
        setSystemMessage({
          icon: 'success',
          title: 'data obtained successfully',
        })
      );
    }
    if (id) {
      const response = yield Get(ORGANIZATION, id);
      const entry = get(response.data, 'data');
      yield put(fetchOneOrganizationSucceeded({ entry }));
      yield put(
        setSystemMessage({
          icon: 'success',
          title: 'data obtained successfully',
        })
      );
    }
  } catch (error) {
    yield put(setSystemMessage({ icon: 'danger', title: `${error}` }));
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(FETCH_ORGANIZATION_REQUESTED, fetchOrganizationRequestedSagas),
  ]);
}
