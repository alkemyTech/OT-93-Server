import {
  SUBMIT_MEMBERS_REQUESTED,
  FETCH_MEMBERS_REQUESTED,
  FETCH_ONE_MEMBERS_SUCCEEDED,
  FETCH_MEMBERS_SUCCEEDED,
  DELETE_MEMBERS_REQUESTED,
  CLEAN_MEMBERS_FORM,
} from './types';

export const submitMembersRequested = (props) => ({
  type: SUBMIT_MEMBERS_REQUESTED,
  ...props,
});

export const fetchMembersRequested = (props) => ({
  type: FETCH_MEMBERS_REQUESTED,
  ...props,
});

export const fetchOneMembersSucceeded = (props) => ({
  type: FETCH_ONE_MEMBERS_SUCCEEDED,
  ...props,
});

export const fetchMembersSucceeded = (props) => ({
  type: FETCH_MEMBERS_SUCCEEDED,
  ...props,
});

export const deleteMembersRequested = (id) => ({
  type: DELETE_MEMBERS_REQUESTED,
  id,
});

export const cleanMembersForm = (props) => ({
  type: CLEAN_MEMBERS_FORM,
  props,
});
