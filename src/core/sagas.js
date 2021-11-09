import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import Home from './state/Home/sagas';
import Categories from './state/categories/sagas';
import users from './state/Users/sagas';
import Activities from './state/activities/sagas';
import Session from './state/Session/sagas';
import UserEdit from './state/UserEdit/sagas';

export default function* rootSagas() {
  yield all([
    news(),
    Home(),
    Activities(),
    users(),
    Session(),
    UserEdit(),
    Categories(),
  ]);
}
