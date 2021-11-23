import { all, put, takeLatest } from 'redux-saga/effects';
import { getRoutes } from '../../../utils';
import { Post } from '../../../Services/privateApiService';
import { push } from '../../middlewares/history';
import { REGISTER_USER } from './types';
import { registerUser } from './actions';
import { register } from '../../../utils/constants';

const mainRoutes = getRoutes('mainRoutes');

function* postRegisterUserRequestedSagas({ payload }) {
  try {
    yield Post(register, payload);
    put(registerUser({}));
    yield push(mainRoutes.home);
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([takeLatest(REGISTER_USER, postRegisterUserRequestedSagas)]);
}
