import {
  SUBMIT_SLIDE_REQUESTED,
  FETCH_SLIDE_REQUESTED,
  FETCH_ONE_SLIDE_SUCCEEDED,
  FETCH_SLIDE_SUCCEEDED,
  DELETE_SLIDE_REQUESTED,
  CLEAN_SLIDE_FORM,
} from './types';

export const submitSlideRequested = (props) => ({
  type: SUBMIT_SLIDE_REQUESTED,
  ...props,
});

export const fetchSlideRequested = (props) => ({
  type: FETCH_SLIDE_REQUESTED,
  ...props,
});

export const fetchOneSlideSucceeded = (props) => ({
  type: FETCH_ONE_SLIDE_SUCCEEDED,
  ...props,
});

export const fetchSlideSucceeded = (props) => ({
  type: FETCH_SLIDE_SUCCEEDED,
  ...props,
});

export const deleteSlideRequested = (id) => ({
  type: DELETE_SLIDE_REQUESTED,
  id,
});

export const cleanSlideForm = (props) => ({
  type: CLEAN_SLIDE_FORM,
  props,
});
