import {
  FETCH_MEMBERS_SUCCEEDED,
} from './types';

const initialState = {
  list: {
    documents: [],
    total: null,
  },
};

const Members = (state = { ...initialState }, { type, ...props }) => {
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

export default Members;
