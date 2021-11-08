import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import get from 'lodash/get';
import {
  NEWS,
} from '../../../Services/Urls';
import { getRoutes } from '../../../utils';
import Api from '../../../Services/Api';
import { push } from '../../middlewares/history';
import {
  REGISTER_USER,
} from './types';
import {
  registerUser,
} from './actions';

const mainRoutes = getRoutes('mainRoutes');

function* postRegisterUserRequestedSagas({ payload, id }) {
  // add method to register user
  try {
    let success = null;
    if (id) {
      const responseRegister = yield Api.post(`${NEWS}`, payload);
      success = get(responseRegister, 'data.success');
      yield push(mainRoutes.home);
    }
    if (success) {
      yield put(registerUser({}));
    }
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(REGISTER_USER, postRegisterUserRequestedSagas),
  ]);
}
