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
import { Get, Post } from '../../../Services/privateApiService';
import {
  fetchNewsRequested,
  fetchNewsSucceeded,
  fetchOneNewsSucceeded,
  cleanNewsForm,
} from './actions';

const backOfficeRoutes = getRoutes('backOffice');

function* submitNewsRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  try {
    let success = null;
    if (id) {
      const responseNews = yield Post(`${NEWS}`, id, {
        name,
        image,
        description,
      });
      success = get(responseNews, 'data.success');
      yield push(`${backOfficeRoutes.news}/${id}`);
    }
    if (!id) {
      const responseNews = yield Post(NEWS, payload);
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
      const response = yield Get(NEWS, id);
      const entry2 = get(response, 'data');
      const entry = get(entry2, 'data');
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
