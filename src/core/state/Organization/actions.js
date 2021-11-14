import {
  FETCH_ORGANIZATION_REQUESTED,
  FETCH_ONE_ORGANIZATION_SUCCEEDED,
  FETCH_ORGANIZATION_SUCCEEDED,
} from './types';

export const fetchOrganizationRequested = (props) => ({
  type: FETCH_ORGANIZATION_REQUESTED,
  ...props,
});

export const fetchOneOrganizationSucceeded = (props) => ({
  type: FETCH_ONE_ORGANIZATION_SUCCEEDED,
  ...props,
});

export const fetchOrganizationSucceeded = (props) => ({
  type: FETCH_ORGANIZATION_SUCCEEDED,
  ...props,
});
