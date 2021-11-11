import { all, takeLatest, put } from 'redux-saga/effects';
import get from 'lodash/get';
import { Get } from '../../../Services/privateApiService';
import { MEMBERS } from '../../../Services/Urls';

import {
  FETCH_MEMBERS_REQUESTED,
} from './types';
import { fetchMembersSucceeded } from './actions';

function* fetchMembersRequestedSagas() {
  try {
    const response = yield Get(MEMBERS);
    const documents = get(response.data, 'data');
    yield put(fetchMembersSucceeded({ documents }));
  } catch (error) {
    yield error;
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(FETCH_MEMBERS_REQUESTED, fetchMembersRequestedSagas),
  ]);
}
