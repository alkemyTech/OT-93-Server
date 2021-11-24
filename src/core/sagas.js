import { all } from 'redux-saga/effects';
import news from './state/News/sagas';
import Organization from './state/Organization/sagas';
import Categories from './state/categories/sagas';
import users from './state/Users/sagas';
import Activities from './state/activities/sagas';
import Session from './state/Session/sagas';
import UserEdit from './state/UserEdit/sagas';
import Testimonials from './state/Testimonials/sagas';
import Slides from './state/Slides/sagas';
import Projects from './state/Project/sagas';
import Members from './state/orgMembers/sagas';
import Contact from './state/contact/sagas';

export default function* rootSagas() {
  yield all([
    news(),
    Organization(),
    Activities(),
    users(),
    Session(),
    UserEdit(),
    Categories(),
    Testimonials(),
    Slides(),
    Projects(),
    Members(),
    Contact(),
  ]);
}
