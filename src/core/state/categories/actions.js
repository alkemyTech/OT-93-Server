import {
  SUBMIT_CATEGORIES_REQUESTED,
  FETCH_CATEGORIES_REQUESTED,
  FETCH_ONE_CATEGORIES_SUCCEEDED,
  FETCH_CATEGORIES_SUCCEEDED,
  DELETE_CATEGORIE,
  CLEAN_CATEGORIES_FORM,
} from './types';

export const submitCategoriesRequested = (props) => ({
  type: SUBMIT_CATEGORIES_REQUESTED,
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

export const deleteCategorie = (id) => ({
  type: DELETE_CATEGORIE,
  id,
});

export const cleanCategoriesForm = (props) => ({
  type: CLEAN_CATEGORIES_FORM,
  props,
});
