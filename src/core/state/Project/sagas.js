import { all, takeLatest, put } from 'redux-saga/effects';
import get from 'lodash/get';
import { fetchProjectsSucceeded, fetchOneProjectsSucceeded } from './actions';
import { setSystemMessage } from '../Session/actions';
import { PROJECTS } from '../../../Services/Urls';
import { Get, Post, Patch } from '../../../Services/privateApiService';
import { SUBMIT_PROJECTS_REQUESTED, FETCH_PROJECTS_REQUESTED } from './types';

// eslint-disable-next-line no-empty-function

function* submitProjectsRequestedSagas({ payload, id }) {
  let alertProps;
  try {
    if (!id) {
      yield Post('projects', {
        title: payload.title,
        description: payload.description,
        image: payload.image,
      }).then((e) => {
        if (e.data.success) {
          alertProps = {
            icon: 'success',
            title: 'data submited successfully',
          };
        }
        if (e.data.error) {
          alertProps = {
            icon: 'error',
            title: 'there was an error submiting the data',
          };
        }
        return alertProps;
      });
      const { icon, title } = alertProps;
      yield put(
        setSystemMessage({
          icon,
          title,
        }),
      );
    }
    if (id) {
      const data = {
        title: payload.title,
        description: payload.description,
        image: payload.image,
      };

      yield Patch(PROJECTS, id, data).then((e) => {
        if (e.data.success) {
          alertProps = {
            icon: 'success',
            title: 'data submited successfully',
          };
        }
        if (e.data.error) {
          alertProps = {
            icon: 'error',
            title: 'there was an error submiting the data',
          };
        }
        return alertProps;
      });
      const { icon, title } = alertProps;
      yield put(
        setSystemMessage({
          icon,
          title,
        }),
      );
    }
  } catch (error) {
    yield error;
  }
}

function* fetchProjectsRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${PROJECTS}`);

      const documents = get(response.data, 'data');
      yield put(fetchProjectsSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(`${PROJECTS}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneProjectsSucceeded({ entry }));
    }
  } catch (error) {
    yield error;
    setSystemMessage({
      icon: 'error',
      title: 'there was an error fetching the data',
    });
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(FETCH_PROJECTS_REQUESTED, fetchProjectsRequestedSagas),
    takeLatest(SUBMIT_PROJECTS_REQUESTED, submitProjectsRequestedSagas),
  ]);
}
