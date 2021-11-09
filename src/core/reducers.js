/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './middlewares/history';
import news from './state/News/reducers';
import Home from './state/Home/reducer';
import Categories from './state/categories/reducer';
import users from './state/Users/reducers';
import login from './state/Session/reducers';
import Activities from './state/activities/reducer';
import edit from './state/Edit/reducers';

export default () => combineReducers({
  router: connectRouter(history),
  news,
  Home,
  Categories,
  users,
  login,
  Activities,
  edit,
});
