import {
  FETCH_MEMBERS_REQUESTED,
  FETCH_MEMBERS_SUCCEEDED,
} from './types';

export const fetchMembersRequested = (props) => ({
  type: FETCH_MEMBERS_REQUESTED,
  ...props,
});

export const fetchMembersSucceeded = (props) => ({
  type: FETCH_MEMBERS_SUCCEEDED,
  ...props,
});
