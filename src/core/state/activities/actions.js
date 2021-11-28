import {
  SUBMIT_ACTIVITIES_REQUESTED,
  FETCH_ACTIVITIES_REQUESTED,
  FETCH_ONE_ACTIVITIES_SUCCEEDED,
  FETCH_ACTIVITIES_SUCCEEDED,
  DELETE_ACTIVITIES_REQUESTED,
  CLEAN_ACTIVITIES_FORM,
  FETCH_DEBOUNCE_ACTIVITIES_REQUESTED,
} from './types';

export const submitActivitiesRequested = (props) => ({
  type: SUBMIT_ACTIVITIES_REQUESTED,
  ...props,
});

export const fetchActivitiesRequested = (props) => ({
  type: FETCH_ACTIVITIES_REQUESTED,
  ...props,
});

export const fetchDebounceActivitiesRequested = (props) => ({
  type: FETCH_DEBOUNCE_ACTIVITIES_REQUESTED,
  ...props,
});

export const fetchOneActivitiesSucceeded = (props) => ({
  type: FETCH_ONE_ACTIVITIES_SUCCEEDED,
  ...props,
});

export const fetchActivitiesSucceeded = (props) => ({
  type: FETCH_ACTIVITIES_SUCCEEDED,
  ...props,
});

export const deleteActivitiesRequested = (id) => ({
  type: DELETE_ACTIVITIES_REQUESTED,
  id,
});

export const cleanActivitiesForm = (props) => ({
  type: CLEAN_ACTIVITIES_FORM,
  props,
});
