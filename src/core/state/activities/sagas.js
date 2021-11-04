/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { all, put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/get';

import {
  SUBMIT_ACTIVITIES_REQUESTED,
  FETCH_ACTIVITIES_REQUESTED,
  DELETE_ACTIVITIES_REQUESTED,
} from './types';

import {
  submitActivitiesRequested,
  fetchActivitiesSucceeded,
  fetchOneActivitiesSucceeded,
  setSystemMessage,
  cleanActivitiesForm,
  fetchActivitiesRequested,
} from './actions';

import { ACTIVITIES } from '../../../Services/Urls';
import { getRoutes } from '../../../utils';
import { Get, Post, Patch } from '../../../Services/privateApiService';

const backOfficeRoutes = getRoutes('mainRoutes').backOfficeRoutes;

function* submitActivitieRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  let data = '';
  try {
    if (!id) {
      yield Post(`${ACTIVITIES}`, {
        name,
        image,
        description,
      }).then((e) => {
        if (e.data.success) {
          return (
            data = {
              icon: 'success',
              title: 'data submited successfully'
            }
          );
        } if (e.data.error) {
          return data = {
            icon: 'error',
            title: 'there was an error submiting the data',
          };
        }
      });
      const { icon, title } = data;
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
      };

      const response = yield Patch(ACTIVITIES, id, data);
      console.log(response);
      yield put(
        setSystemMessage({
          icon: 'success',
          title: 'Activity modified correctly',
        })
      );
    }
  } catch (error) {
    console.log(error);
    setSystemMessage({ icon: 'error', title: 'there was an error submiting the data' });
  }
}

function* fetchActivitiesRequestedSagas({ id }) {
  try {
    if (!id) {
      const response = yield Get(`${ACTIVITIES}`);
      const documents = get(response.data, 'data');
      yield put(fetchActivitiesSucceeded({ documents }));
    }
    if (id) {
      const response = yield Get(`${ACTIVITIES}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneActivitiesSucceeded({ entry }));
    }
  } catch (error) {
    console.log(error);
    setSystemMessage({ icon: 'error', title: 'there was an error fetching the data' });
  }
}

function* deleteActivitieRequestedSagas() {}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_ACTIVITIES_REQUESTED, submitActivitieRequestedSagas),
    takeLatest(FETCH_ACTIVITIES_REQUESTED, fetchActivitiesRequestedSagas),
    takeLatest(DELETE_ACTIVITIES_REQUESTED, deleteActivitieRequestedSagas),
  ]);
}
