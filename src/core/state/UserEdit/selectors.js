import get from 'lodash/get';

const path = 'UserEdit';

export const getUserEditForm = (state) => get(state, `${path}.userForm`);
export const getUserEditFields = (state) => get(state, `${path}.userFields`);
