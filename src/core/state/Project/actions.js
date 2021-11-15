import {
  SUBMIT_PROJECTS_REQUESTED,
  FETCH_PROJECTS_REQUESTED,
  FETCH_ONE_PROJECTS_SUCCEEDED,
  FETCH_PROJECTS_SUCCEEDED,
  DELETE_PROJECTS_REQUESTED,
  CLEAN_PROJECTS_FORM,

} from './types';

export const submitProjectsRequested = (props) => ({
  type: SUBMIT_PROJECTS_REQUESTED,
  ...props,
});

export const fetchProjectsRequested = (props) => ({
  type: FETCH_PROJECTS_REQUESTED,
  ...props,
});

export const fetchOneProjectsSucceeded = (props) => ({
  type: FETCH_ONE_PROJECTS_SUCCEEDED,
  ...props,
});

export const fetchProjectsSucceeded = (props) => ({
  type: FETCH_PROJECTS_SUCCEEDED,
  ...props,
});

export const deleteProjectsRequested = (id) => ({
  type: DELETE_PROJECTS_REQUESTED,
  id,
});

export const cleanProjectsForm = (props) => ({
  type: CLEAN_PROJECTS_FORM,
  props,
});
