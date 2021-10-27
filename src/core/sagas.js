import {all} from 'redux-saga/effects';
import news from './state/News/sagas';

export default function* rootSagas() {
    yield all([
        news(),
    ]);
}
