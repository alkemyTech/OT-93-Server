import {
  REGISTER_USER,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const registerUser = (props) => ({
  type: REGISTER_USER,
  ...props,
});
