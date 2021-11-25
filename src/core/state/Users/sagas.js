import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';
import { getRoutes, createSession } from '../../../utils';
import { Post } from '../../../Services/privateApiService';
import { push } from '../../middlewares/history';
import { REGISTER_USER } from './types';
import { cleanRegisterForm } from './actions';
import { register } from '../../../utils/constants';
import { setSystemMessage } from '../Session/actions';

const mainRoutes = getRoutes('mainRoutes');

function* postRegisterUserRequestedSagas({ payload }) {
  const { name, email, password } = payload;
  try {
    const registered = yield Post(register, {
      name,
      email,
      password,
    });
    const token = get(registered.data, 'data.token');
    const success = get(registered, 'data.success');
    if (token) {
      createSession(token);
    }
    if (success) {
      yield push(mainRoutes.home);
      yield put(cleanRegisterForm({}));
    }
    if (!success) {
      yield put(setSystemMessage({ icon: 'error', title: 'Hubo un problema con tus datos' }));
    }
  } catch (err) {
    yield Error(err);
  }
}

export default function* userSagas() {
  yield all([takeLatest(REGISTER_USER, postRegisterUserRequestedSagas)]);
}
