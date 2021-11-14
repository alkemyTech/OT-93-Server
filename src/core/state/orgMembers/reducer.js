/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  FETCH_MEMBERS_SUCCEEDED,
} from './types';

const initialState = {
  list: {
    documents: [],
    total: null,
  },
};

const Activities = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_MEMBERS_SUCCEEDED: {
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

export default Activities;
