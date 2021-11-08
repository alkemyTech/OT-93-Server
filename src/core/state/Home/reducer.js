import { FETCH_ORGANIZATION_SUCCEEDED, FETCH_SLIDES_SUCCEEDED } from './types';

const initialState = {
  organization: {},
  slides: [],
};

const Home = (state = { ...initialState }, { type, props }) => {
  switch (type) {
    case FETCH_ORGANIZATION_SUCCEEDED: {
      return {
        ...state,
        organization: props,
      };
    }
    case FETCH_SLIDES_SUCCEEDED: {
      return {
        ...state,
        slides: props,
      };
    }
    default:
      return state;
  }
};

export default Home;
