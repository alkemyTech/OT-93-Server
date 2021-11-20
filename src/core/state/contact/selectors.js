import get from 'lodash/get';

const path = 'Contact';

export const getContactForm = (state) => get(state, `${path}.contactForm`);
export const getContactFields = (state) => get(state, `${path}.contactFields`);
export const getContact = (state) => get(state, `${path}.list.documents`);
