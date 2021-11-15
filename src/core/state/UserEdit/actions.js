/* eslint-disable import/prefer-default-export */
import {
  EDIT_USER,
  CLEAN_FORM,
} from './types';

export const editUser = (props) => ({
  type: EDIT_USER,
  ...props,
});

export const cleanForm = (props) => ({
  type: CLEAN_FORM,
  ...props,
});
