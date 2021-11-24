import {
  SUBMIT_CONTACT_REQUESTED,
  FETCH_CONTACT_REQUESTED,
  FETCH_ONE_CONTACT_SUCCEEDED,
  FETCH_CONTACT_SUCCEEDED,
  DELETE_CONTACT_REQUESTED,
  CLEAN_CONTACT_FORM,
  SET_SYSTEM_MSG,
} from './types';

export const submitContactRequested = (props) => ({
  type: SUBMIT_CONTACT_REQUESTED,
  ...props,
});

export const setSystemMessage = (props) => ({
  type: SET_SYSTEM_MSG,
  ...props,
});

export const fetchContactRequested = (props) => ({
  type: FETCH_CONTACT_REQUESTED,
  ...props,
});

export const fetchOneContactSucceeded = (props) => ({
  type: FETCH_ONE_CONTACT_SUCCEEDED,
  ...props,
});

export const fetchContactSucceeded = (props) => ({
  type: FETCH_CONTACT_SUCCEEDED,
  ...props,
});

export const deleteContactRequested = (id) => ({
  type: DELETE_CONTACT_REQUESTED,
  id,
});

export const cleanContactForm = (props) => ({
  type: CLEAN_CONTACT_FORM,
  props,
});
