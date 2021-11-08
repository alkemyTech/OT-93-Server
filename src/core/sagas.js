import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import Home from './state/Home/sagas';
import Activities from './state/activities/sagas';

export default function* rootSagas() {
  yield all([news(), Home(), Activities()]);
}
