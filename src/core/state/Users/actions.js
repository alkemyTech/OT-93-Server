/* eslint-disable import/prefer-default-export */
import {
  REGISTER_USER,
} from './types';

export const registerUser = (props) => ({
  type: REGISTER_USER,
  ...props,
});
