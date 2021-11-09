import get from 'lodash/get';

const path = 'edit';

export const getRegisterForm = (state) => get(state, `${path}.registerForm`);
export const getRegisterFields = (state) => get(state, `${path}.registerFields`);
