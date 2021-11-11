import get from 'lodash/get';

const path = 'login';

export const getLoginForm = (state) => get(state, `${path}.loginForm`);
export const getLoginFields = (state) => get(state, `${path}.loginFields`);
export const getSlickSettings = (state) => get(state, `${path}.slickSettings`);
