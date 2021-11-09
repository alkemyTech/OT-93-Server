/* eslint-disable import/prefer-default-export */
import {
  EDIT_USER,
} from './types';

export const editUser = (props) => ({
  type: EDIT_USER,
  ...props,
});
