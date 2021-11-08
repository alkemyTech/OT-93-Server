import get from 'lodash/get';

const path = 'Home';

export const getOrganization = (state) => get(state, `${path}.organization`);
export const getSlides = (state) => get(state, `${path}.slides`);
