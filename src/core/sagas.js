import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import Categories from './state/categories/sagas';

export default function* rootSagas() {
  yield all([news(), Categories()]);
}
