import {
  FETCH_ORGANIZATION_REQUESTED,
  FETCH_ORGANIZATION_SUCCEEDED,
  SUBMIT_ORGANIZATION_REQUESTED,
} from './types';

export const fetchOrganizationRequested = (props) => ({
  type: FETCH_ORGANIZATION_REQUESTED,
  ...props,
});

export const fetchOrganizationSucceeded = (props) => ({
  type: FETCH_ORGANIZATION_SUCCEEDED,
  ...props,
});

export const fetchOneOrganizationSucceeded = (props) => ({
  type: FETCH_ORGANIZATION_SUCCEEDED,
  ...props,
});

export const submitOrganizationRequested = (props) => ({
  type: SUBMIT_ORGANIZATION_REQUESTED,
  ...props,
});
