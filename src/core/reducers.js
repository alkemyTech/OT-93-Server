/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './middlewares/history';
import news from './state/News/reducers';
import Categories from './state/categories/reducer';

export default () => combineReducers({
  router: connectRouter(history),
  news,
  Categories,
});
