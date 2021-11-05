import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import testimonials from './state/Testimonials/sagas';

export default function* rootSagas() {
  yield all([news(), testimonials()]);
}
