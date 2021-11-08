import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import Home from './state/Home/sagas';

export default function* rootSagas() {
  yield all([news(), Home()]);
}
