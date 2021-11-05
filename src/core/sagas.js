import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import users from './state/Users/sagas';

export default function* rootSagas() {
  yield all([news()]);
  yield all([users()]);
}
