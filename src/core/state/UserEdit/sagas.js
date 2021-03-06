import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { get } from 'lodash';
import {
  USERS,
} from '../../../Services/Urls';
import { getRoutes } from '../../../utils';
import {
  Post, Patch, Get, Delete,
} from '../../../Services/privateApiService';
import { push } from '../../middlewares/history';
import {
  EDIT_USER,
  FETCH_USERS_REQUESTED,
  DELETE_USERS,
} from './types';
import {
  cleanForm,
  editUser,
  fetchUsersSucceeded,
  setSystemMessage,
} from './actions';

const mainRoutes = getRoutes('mainRoutes');

function* postEditUserRequestedSagas({ payload, id }) {
  try {
    let success = null;
    if (id) {
      const responseEdit = yield Patch(USERS, id, payload);
      success = get(responseEdit, 'data.success');
      yield push(mainRoutes.home);
    }
    if (!id) {
      const responseCreate = yield Post(USERS, id, payload);
      success = get(responseCreate, 'data.success');
      yield push(mainRoutes.home);
    }
    if (success) {
      yield put(editUser({}));
      yield put(cleanForm({}));
    }
  } catch (err) {
    throw Error(err);
  }
}

function* fetchUsersRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(USERS);
      const documents = get(response, 'data');
      yield put(fetchUsersSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(USERS, id);
      const entry = get(response.data, 'data');
      yield put(editUser({ entry }));
    }
  } catch (error) {
    setSystemMessage({ icon: 'error', title: 'there was an error fetching the data' });
  }
}

function* deleteUsersSagas({ id }) {
  try {
    yield Delete(USERS, id);
    yield put(fetchUsersSucceeded);
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(EDIT_USER, postEditUserRequestedSagas),
    takeLatest(FETCH_USERS_REQUESTED, fetchUsersRequestedSagas),
    takeLatest(DELETE_USERS, deleteUsersSagas),
  ]);
}
