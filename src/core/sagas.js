import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import Categories from './state/categories/sagas';
import users from './state/Users/sagas';
import Activities from './state/activities/sagas';
import Session from './state/Session/sagas';

export default function* rootSagas() {
  yield all([
    news(),
    Activities(),
    users(),
    Session(),
    Categories(),
  ]);
}
