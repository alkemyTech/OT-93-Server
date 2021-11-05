/* eslint-disable no-unused-vars no-empty-functions */
import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  Get,
  Post,
  Patch,
  Delete,
} from '../../../Services/privateApiService';
import get from 'lodash/get';
import {
  TESTIMONIALS,
} from '../../../Services/Urls';
import { getRoutes } from '../../../utils';
import {
  SUBMIT_TESTIMONIAL_REQUESTED,
  FETCH_TESTIMONIAL_REQUESTED,
  DELETE_TESTIMONIAL_REQUESTED,
} from './types';
import {
  fetchTestimonialSucceeded,
  fetchOneTestimonialSucceeded,
  fetchTestimonialRequested,
  setSystemMessage,
} from './actions';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

function* submitTestimonialRequestedSagas({ payload, id }) {
  const { name, image, description } = payload;
  let alertProps = '';
  try {
    if (!id) {
      yield Post(`${TESTIMONIALS}`, {
        name,
        image,
        description,
      }).then((e) => {
        if (e.data.success) {
          return alertProps = {
            icon: 'success',
            title: 'data submited successfully'
          };
        } if (e.data.error) {
          return (
            alertProps = {
              icon: 'error',
              title: 'there was an error submiting the data',
            }
          );
        }
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
      };
      yield Patch(TESTIMONIALS, id, data).then((e) => {
        if (e.data.success) {
          return alertProps = {
            icon: 'success',
            title: 'data submited successfully'
          };
        } if (e.data.error) {
          return alertProps = {
            icon: 'error',
            title: 'there was an error submiting the data',
          };
        }
      });
      const { icon, title } = alertProps;
      yield put(setSystemMessage({
        icon,
        title,
      }));
    }
  } catch (error) {
    yield console.log(error);
  }

}

function* fetchTestimonialRequestedSagas({ id }){
  try {
    if (!id) {
      const response = yield Get(`${TESTIMONIALS}`);
      const documents = get(response.data, 'data');
      yield put(fetchTestimonialSucceeded({ documents }));
    }
    if (id) {
      const response = yield get(`${TESTIMONIALS}/${id}`);
      const entry = get(response.data, 'data');
      yield put(fetchOneTestimonialSucceeded({ entry }));
    }
  } catch (error) {
    console.log(error);
    setSystemMessage({ icon: 'error', title: 'there was an error fetching the data' });
  }
}

function* deleteTestimonialRequestedSagas({ id }){
  try {
    yield Delete(`${NEWS}/${id}`);
    yield put(fetchTestimonialRequested());
  } catch (err) {
    throw Error(err);
  }

}

export default function* userSagas() {
  yield all([
    takeLatest(SUBMIT_TESTIMONIAL_REQUESTED, submitTestimonialRequestedSagas),
    takeLatest(FETCH_TESTIMONIAL_REQUESTED, fetchTestimonialRequestedSagas),
    takeLatest(DELETE_TESTIMONIAL_REQUESTED, deleteTestimonialRequestedSagas),
  ]);
}
