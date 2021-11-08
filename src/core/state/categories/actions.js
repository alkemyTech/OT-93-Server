import {
  SUBMIT_CATEGORIES_REQUESTED,
  FETCH_CATEGORIES_REQUESTED,
  FETCH_ONE_CATEGORIES_SUCCEEDED,
  FETCH_CATEGORIES_SUCCEEDED,
  DELETE_CATEGORIES_REQUESTED,
  CLEAN_CATEGORIES_FORM,
  SET_SYSTEM_MSG,
} from './types';

export const submitCategoriesRequested = (props) => ({
  type: SUBMIT_CATEGORIES_REQUESTED,
  ...props,
});

export const setSystemMessage = (props) => ({
  type: SET_SYSTEM_MSG,
  ...props,
});

export const fetchCategoriesRequested = (props) => ({
  type: FETCH_CATEGORIES_REQUESTED,
  ...props,
});

export const fetchOneCategoriesSucceeded = (props) => ({
  type: FETCH_ONE_CATEGORIES_SUCCEEDED,
  ...props,
});

export const fetchCategoriesSucceeded = (props) => ({
  type: FETCH_CATEGORIES_SUCCEEDED,
  ...props,
});

export const deleteCategoriesRequested = (id) => ({
  type: DELETE_CATEGORIES_REQUESTED,
  id,
});

export const cleanCategoriesForm = (props) => ({
  type: CLEAN_CATEGORIES_FORM,
  props,
});