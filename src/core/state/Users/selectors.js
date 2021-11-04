import get from 'lodash/get';

const path = 'users';

export const getUsersForm = (state) => get(state, `${path}.registerForm`);
export const getUsersFields = (state) => get(state, `${path}.registerFields`);
