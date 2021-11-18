import {
  SUBMIT_MEMBERS_REQUESTED,
  FETCH_MEMBERS_REQUESTED,
  FETCH_ONE_MEMBERS_SUCCEEDED,
  FETCH_MEMBERS_SUCCEEDED,
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
