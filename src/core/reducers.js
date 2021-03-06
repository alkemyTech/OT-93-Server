/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './middlewares/history';
import news from './state/News/reducers';
import Organization from './state/Organization/reducers';
import Categories from './state/categories/reducer';
import users from './state/Users/reducers';
import login from './state/Session/reducers';
import Activities from './state/activities/reducer';
import UserEdit from './state/UserEdit/reducers';
import Testimonials from './state/Testimonials/reducers';
import Slides from './state/Slides/reducers';
import Project from './state/Project/reducers';
import Members from './state/orgMembers/reducer';
import Contact from './state/contact/reducer';

export default () => combineReducers({
  router: connectRouter(history),
  news,
  Organization,
  Categories,
  users,
  login,
  Activities,
  UserEdit,
  Testimonials,
  Slides,
  Project,
  Members,
  Contact,
});
