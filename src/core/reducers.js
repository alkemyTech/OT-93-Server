import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from './middlewares/history';
import news from './state/News/reducers';

export default () => combineReducers({
    router: connectRouter(history),
    news,
});
