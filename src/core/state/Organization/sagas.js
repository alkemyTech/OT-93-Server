/* eslint-disable */
import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import { getRoutes } from '../../../utils';
import {
  FETCH_ORGANIZATION_REQUESTED,
  SUBMIT_ORGANIZATION_REQUESTED,
} from './types';
import {
  fetchOrganizationSucceeded,
  fetchOrganizationRequested,
} from './actions';
import { setSystemMessage, setRequestFlag } from '../Session/actions';
import { ORGANIZATION } from '../../../Services/Urls';
import { Get, Post } from '../../../Services/privateApiService';
import { push } from '../../middlewares/history';

const { backOfficeRoutes } = getRoutes('mainRoutes');

function* fetchOrganizationRequestedSagas({ id }) {
  try {
    yield put(setRequestFlag(true));
    if (!id) {
      const response = yield Get(ORGANIZATION);
      const documents = get(response.data, 'data');
      yield put(fetchOrganizationSucceeded({ documents }));
    }
  } catch (error) {
    yield put(setSystemMessage({ icon: 'danger', title: `${error}` }));
  } finally {
    yield put(setRequestFlag(false));
  }
}
function* submitOrganizationRequestedSagas({ payload }) {
  const {
    name,
    logo,
    short_description,
    long_description,
    facebook_url,
    linkedin_url,
    instagram_url,
    twitter_url,
  } = payload;
  try {
    let success = null;
    const responseOrganization = yield Post(ORGANIZATION, {
      name,
      logo,
      short_description,
      long_description,
      facebook_url,
      linkedin_url,
      instagram_url,
      twitter_url,
    });
    success = get(responseOrganization, 'data.success');
    yield push(`${backOfficeRoutes.home}`);
    if (success) {
      yield put(fetchOrganizationRequested({}));
    }
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_ORGANIZATION_REQUESTED, submitOrganizationRequestedSagas),
    takeLatest(FETCH_ORGANIZATION_REQUESTED, fetchOrganizationRequestedSagas),
  ]);
}
