import get from 'lodash/get';
import { USERS } from '../../../Services/Urls';

export const getRegisterForm = (state) => get(state, `${USERS}.registerForm`);
export const getRegisterFields = (state) => get(state, `${USERS}.registerFields`);
