/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './middlewares/history';
import news from './state/News/reducers';
import Activities from './state/activities/reducer';

export default () => combineReducers({
  router: connectRouter(history),
  news,
  Activities,
});
