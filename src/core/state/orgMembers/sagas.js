import { all, takeLatest, put } from 'redux-saga/effects';
import get from 'lodash/get';
import {
  Get, Post, Patch, Delete,
} from '../../../Services/privateApiService';
import { MEMBERS } from '../../../Services/Urls';
import { setSystemMessage } from '../Session/actions';
import { SUBMIT_MEMBERS_REQUESTED, FETCH_MEMBERS_REQUESTED, DELETE_MEMBERS_REQUESTED } from './types';
import { fetchMembersSucceeded, fetchOneMembersSucceeded, fetchMembersRequested } from './actions';

function* submitMembersRequestedSagas({ payload, id }) {
  const {
    name, image, description, facebookUrl, linkedinUrl,
  } = payload;
  let alertProps;
  try {
    if (!id) {
      yield Post(MEMBERS, {
        name, image, description, facebookUrl, linkedinUrl,
      }).then((e) => {
        if (e.data.success) {
          alertProps = {
            icon: 'success',
            title: 'data submited successfully',
          };
        } if (e.data.error) {
          alertProps = {
            icon: 'error',
            title: 'there was an error submiting the data',
          };
        }
        return alertProps;
      });
      const { icon, title } = alertProps;
      yield put(setSystemMessage({
        icon,
        title,
      }));
    }
    if (id) {
      const data = {
        name,
        image,
        description,
        facebookUrl,
        linkedinUrl,
      };

      yield Patch(MEMBERS, id, data).then((e) => {
        if (e.data.success) {
          alertProps = {
            icon: 'success',
            title: 'data submited successfully',
          };
        } if (e.data.error) {
          alertProps = {
            icon: 'error',
            title: 'there was an error submiting the data',
          };
        }
        return alertProps;
      });
      const { icon, title } = alertProps;
      yield put(setSystemMessage({
        icon,
        title,
      }));
    }
  } catch (error) {
    yield error;
  }
}

function* fetchMembersRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${MEMBERS}`);
      const documents = get(response.data, 'data');
      yield put(fetchMembersSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(`${MEMBERS}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneMembersSucceeded({ entry }));
    }
  } catch (error) {
    yield put(
      setSystemMessage({
        icon: 'danger',
        title: `${error}`,
      }),
    );
  }
}

function* deleteMembersRequestedSagas({ id }) {
  try {
    yield Delete(`${MEMBERS}/${id}`);
    yield put(fetchMembersRequested());
  } catch (err) {
    throw Error(err);
  }
}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_MEMBERS_REQUESTED, submitMembersRequestedSagas),
    takeLatest(FETCH_MEMBERS_REQUESTED, fetchMembersRequestedSagas),
    takeLatest(DELETE_MEMBERS_REQUESTED, deleteMembersRequestedSagas),
  ]);
}
