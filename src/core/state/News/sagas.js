import { all, put, takeLatest } from 'redux-saga/effects';

import get from 'lodash/get';
import { NEWS } from '../../../Services/Urls';

import { getRoutes } from '../../../utils';
import Api from '../../../Services/Api';
import { push } from '../../middlewares/history';
import {
  SUBMIT_NEWS_REQUESTED,
  FETCH_NEWS_REQUESTED,
  DELETE_NEWS_REQUESTED,
} from './types';
import { Get } from '../../../Services/privateApiService';

import {
  fetchNewsRequested,
  fetchNewsSucceeded,
  fetchOneNewsSucceeded,
  cleanNewsForm,
} from './actions';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

function* submitNewsRequestedSagas({ payload, id }) {
  try {
    let success = null;
    if (id) {
      const responseNews = yield Api.put(`${NEWS}/${id}`, payload);
      success = get(responseNews, 'data.success');
      yield push(`${mainRoutes.news}/${id}`);
    }
    if (!id) {
      const responseNews = yield Api.post(`${NEWS}`, payload);
      success = get(responseNews, 'data.success');
      yield push(backOfficeRoutes.news.list);
    }
    if (success) {
      yield put(cleanNewsForm({}));
      yield put(fetchNewsRequested({}));
    }
  } catch (err) {
    throw Error(err);
  }
}

function* fetchNewsRequestedSagas({ id }) {
  try {
    if (id) {
      let response = yield Api.get(`${NEWS}/${id}`);
      response = {
        success: true,
        data: {
          id: 2,
          name: 'string2',
          slug: 'string2',
          content: 'string2',
          image: 'string2',
          user_id: 0,
          category_id: 0,
          created_at: '2021-10-27T03:58:49.655Z',
          updated_at: '2021-10-27T03:58:49.655Z',
          deleted_at: '2021-10-27T03:58:49.655Z',
        },
        message: 'realizado con exito',
      };

      const entry = get(response, 'data');
      if (!entry) {
        return yield put(cleanNewsForm({}));
      }
      return yield put(fetchOneNewsSucceeded({ entry }));
    }
    const entries = yield Get(NEWS);
    const documents = get(entries, 'data');
    return yield put(fetchNewsSucceeded({ documents }));
  } catch (err) {
    throw Error(err);
  }
}

function* deleteNewsRequestedSagas({ id }) {
  try {
    yield Api.delete(`${NEWS}/${id}`);
    yield put(fetchNewsRequested());
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_NEWS_REQUESTED, submitNewsRequestedSagas),
    takeLatest(FETCH_NEWS_REQUESTED, fetchNewsRequestedSagas),
    takeLatest(DELETE_NEWS_REQUESTED, deleteNewsRequestedSagas),
  ]);
}
