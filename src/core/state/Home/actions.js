import {
  FETCH_ORGANIZATION_REQUESTED,
  FETCH_ORGANIZATION_SUCCEEDED,
  FETCH_SLIDES_REQUESTED,
  FETCH_SLIDES_SUCCEEDED,
} from './types';

export const fetchOrganizationRequested = (props) => ({
  type: FETCH_ORGANIZATION_REQUESTED,
  ...props,
});

export const fetchOrganizationSucceeded = (props) => ({
  type: FETCH_ORGANIZATION_SUCCEEDED,
  props,
});

export const fetchSlidesRequested = (props) => ({
  type: FETCH_SLIDES_REQUESTED,
  ...props,
});

export const fetchSlidesSucceeded = (props) => ({
  type: FETCH_SLIDES_SUCCEEDED,
  props,
});
