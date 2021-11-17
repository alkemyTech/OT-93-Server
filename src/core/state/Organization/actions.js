import {
  FETCH_ORGANIZATION_REQUESTED,
  FETCH_ORGANIZATION_SUCCEEDED,
} from './types';

export const fetchOrganizationRequested = (props) => ({
  type: FETCH_ORGANIZATION_REQUESTED,
  ...props,
});

export const fetchOrganizationSucceeded = (props) => ({
  type: FETCH_ORGANIZATION_SUCCEEDED,
  ...props,
});
