import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import Home from './state/Home/sagas';
import Categories from './state/categories/sagas';
import users from './state/Users/sagas';
import Activities from './state/activities/sagas';
import Session from './state/Session/sagas';
import Testimonials from './state/Testimonials/sagas';
import Slides from './state/Slides/sagas';

export default function* rootSagas() {
  yield all([
    news(),
    Home(),
    Activities(),
    users(),
    Session(),
    Categories(),
    Testimonials(),
    Slides(),
  ]);
}
