import {
  SUBMIT_ACTIVITIES_REQUESTED,
  FETCH_ACTIVITIES_REQUESTED,
  FETCH_ONE_ACTIVITIES_SUCCEEDED,
  FETCH_ACTIVITIES_SUCCEEDED,
  DELETE_ACTIVITIES_REQUESTED,
  CLEAN_ACTIVITIES_FORM,
  SET_SYSTEM_MSG,
} from './types';

export const submitActivitiesRequested = (props) => ({
  type: SUBMIT_ACTIVITIES_REQUESTED,
  ...props,
});

export const setSystemMessage = (props) => ({
  type: SET_SYSTEM_MSG,
  ...props,
});

export const fetchActivitiesRequested = (props) => ({
  type: FETCH_ACTIVITIES_REQUESTED,
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
