import {
  all, put, takeLatest, debounce,
} from 'redux-saga/effects';
import get from 'lodash/get';
import { getRoutes } from '../../../utils';
import { NEWS } from '../../../Services/Urls';
import { push } from '../../middlewares/history';
import {
  SUBMIT_NEWS_REQUESTED,
  FETCH_NEWS_REQUESTED,
  DELETE_NEWS_REQUESTED,
  FETCH_DEBOUNCE_NEWS_REQUESTED,
} from './types';
import { Get, Post, Delete } from '../../../Services/privateApiService';
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

function* fetchNewsRequestedSagas({ id, search }) {
  try {
    let url = `${NEWS}`;
    if (!id) {
      if (search) {
        url += `?search=${search}`;
      }
      const response = yield Get(url);
      const documents = get(response.data, 'data');
      yield put(fetchNewsSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(NEWS, id);
      const entry2 = get(response, 'data');
      const entry = get(entry2, 'data');
      if (!entry) {
        yield put(cleanNewsForm({}));
      }
      yield put(fetchOneNewsSucceeded({ entry }));
    }
  } catch (err) {
    throw Error(err);
  }
}

function* deleteNewsRequestedSagas({ id }) {
  try {
    yield Delete(`${NEWS}/${id}`);
    // eslint-disable-next-line no-console
    console.log(id);
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
    debounce(1000, FETCH_DEBOUNCE_NEWS_REQUESTED, fetchNewsRequestedSagas),
  ]);
}
