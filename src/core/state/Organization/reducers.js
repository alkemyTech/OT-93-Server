import { FETCH_ORGANIZATION_SUCCEEDED } from './types';

const initialState = {
  list: {
    documents: {},
    total: null,
  },
};

const Organization = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ORGANIZATION_SUCCEEDED: {
      return {
        ...state,
        list: {
          documents: props.documents,
        },
      };
    }
    default:
      return state;
  }
};

export default Organization;
