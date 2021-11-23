/* eslint-disable import/prefer-default-export */
import {
  EDIT_USER,
  CLEAN_FORM,
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
  DELETE_USERS,
  SET_SYSTEM_MSG,
} from './types';

export const editUser = (props) => ({
  type: EDIT_USER,
  ...props,
});

export const cleanForm = (props) => ({
  type: CLEAN_FORM,
  ...props,
});

export const fetchUsersRequested = (props) => ({
  type: FETCH_USERS_REQUESTED,
  ...props,
});

export const fetchUsersSucceeded = (props) => ({
  type: FETCH_USERS_SUCCEEDED,
  ...props,
});

export const deleteUsers = (id) => ({
  type: DELETE_USERS,
  id,
});

export const setSystemMessage = (props) => ({
  type: SET_SYSTEM_MSG,
  ...props,
});
