import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { get } from 'lodash';
import { USERS } from '../../../Services/Urls';
import { getRoutes } from '../../../utils';
import { Post, Patch } from '../../../Services/privateApiService';
import { push } from '../../middlewares/history';
import {
  EDIT_USER,
} from './types';
import {
  cleanForm,
  editUser,
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

export default function* userSagas() {
  yield all([
    takeLatest(EDIT_USER, postEditUserRequestedSagas),
  ]);
}
