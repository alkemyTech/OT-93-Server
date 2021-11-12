/* eslint-disable no-console */
import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
// import get from 'lodash/get';
import {
  USERS,
} from '../../../Services/Urls';
import { getRoutes } from '../../../utils';
import { Post, Patch } from '../../../Services/privateApiService';
import { push } from '../../middlewares/history';
import {
  EDIT_USER,
} from './types';
import {
  editUser,
} from './actions';

const mainRoutes = getRoutes('mainRoutes');

function* postEditUserRequestedSagas({ payload, id }) {
  console.log('consoleE');
  try {
    if (id) {
      yield Patch(USERS, id, payload);
      yield put(editUser({}));
      yield push(mainRoutes.home);
    }
    if (!id) {
      yield Post(USERS, id, payload);
      yield put(editUser({}));
      yield push(mainRoutes.home);
    }
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(EDIT_USER, postEditUserRequestedSagas),
  ]);
}
