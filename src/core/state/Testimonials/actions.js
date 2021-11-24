import {
  SUBMIT_TESTIMONIAL_REQUESTED,
  FETCH_TESTIMONIAL_REQUESTED,
  FETCH_ONE_TESTIMONIAL_SUCCEEDED,
  FETCH_TESTIMONIAL_SUCCEEDED,
  DELETE_TESTIMONIAL_REQUESTED,
  CLEAN_TESTIMONIAL_FORM,
} from './types';

export const submitTestimonialRequested = (props) => ({
  type: SUBMIT_TESTIMONIAL_REQUESTED,
  ...props,
});

export const fetchTestimonialRequested = (props) => ({
  type: FETCH_TESTIMONIAL_REQUESTED,
  ...props,
});

export const fetchOneTestimonialSucceeded = (props) => ({
  type: FETCH_ONE_TESTIMONIAL_SUCCEEDED,
  ...props,
});

export const fetchTestimonialSucceeded = (props) => ({
  type: FETCH_TESTIMONIAL_SUCCEEDED,
  ...props,
});

export const deleteTestimonialRequested = (id) => ({
  type: DELETE_TESTIMONIAL_REQUESTED,
  id,
});

export const cleanTestimonialForm = (props) => ({
  type: CLEAN_TESTIMONIAL_FORM,
  props,
});
