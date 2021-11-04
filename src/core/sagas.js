import { all } from 'redux-saga/effects';
import news from './state/Users/sagas';

export default function* rootSagas() {
  yield all([news()]);
}
