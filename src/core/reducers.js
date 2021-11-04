/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './middlewares/history';
import users from './state/Users/reducers';

export default () => combineReducers({
  router: connectRouter(history),
  users,
});
