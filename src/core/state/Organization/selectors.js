import get from 'lodash/get';

const path = 'Organization';

export const getOrganization = (state) => get(state, `${path}.list.documents`);
export const getList = (state) => get(state, `${path}.list`);
