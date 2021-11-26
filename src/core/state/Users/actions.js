/* eslint-disable import/prefer-default-export */
import {
  REGISTER_USER,
  CLEAN_REGISTER_FORM,
} from './types';

export const registerUser = (props) => ({
  type: REGISTER_USER,
  ...props,
});

export const cleanRegisterForm = (props) => ({
  type: CLEAN_REGISTER_FORM,
  props,
});
