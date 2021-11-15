import { FETCH_ORGANIZATION_SUCCEEDED, FETCH_ONE_ORGANIZATION_SUCCEEDED } from './types';

const initialState = {
  organizationForm: {},
  list: {
    documents: {},
    total: null,
  },
};

const Organization = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_ORGANIZATION_SUCCEEDED: {
      return {
        ...initialState,
        organizationForm: {
          ...state.organizationForm,
          ...props.entry,
        },
      };
    }
    case FETCH_ORGANIZATION_SUCCEEDED: {
      return {
        ...initialState,
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
