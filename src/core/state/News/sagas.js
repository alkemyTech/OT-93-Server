/* eslint-disable */
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

import {
  fetchNewsRequested,
  fetchNewsSucceeded,
  fetchOneNewsSucceeded,
  cleanNewsForm,
} from './actions';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');
import { Get, Post, Patch, Put } from '../../../Services/privateApiService';

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
      console.log(responseNews);
      success = get(responseNews, 'data.success');
      yield push(`${backOfficeRoutes.news}/${id}`);
    }
    if (!id) {
      const responseNews = yield Post(NEWS, payload);
      console.log(responseNews)
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
      let response = yield Get(NEWS, id); 
      const entry2 = get(JSON.parse(response), 'data');
      const entry = get(entry2, 'data');
      if (!entry) {
        return yield put(cleanNewsForm({}));
      }
      return yield put(fetchOneNewsSucceeded({ entry }));
    }
    let entries = yield Api.get(`${NEWS}`);
    entries = {
      success: true,
      data: [
        {
          id: 0,
          name: 'string',
          slug: 'string',
          content: 'string',
          image: 'string',
          user_id: 0,
          category_id: 0,
          created_at: '2021-10-27T03:58:49.655Z',
          updated_at: '2021-10-27T03:58:49.655Z',
          deleted_at: '2021-10-27T03:58:49.655Z',
        },
        {
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
      ],
      message: 'realizado con exito',
    };
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
