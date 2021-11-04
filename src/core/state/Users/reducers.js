import swal from 'sweetalert2';
import {
  FETCH_NEWS_SUCCEEDED,
  FETCH_ONE_NEWS_SUCCEEDED,
  CLEAN_NEWS_FORM,
  SET_SYSTEM_MSG,
} from './types';

const initialState = {
  newsForm: {
    email: '',
    password: '',
    confirmPassword: '',
    categoryId: 1,
    type: 'register',
  },
  newsFields: [
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
      id: 'email',
      name: 'email',
    },
    {
      label: 'Password',
      placeholder: 'Password',
      type: 'password',
      id: 'password',
      name: 'password',
    },
    {
      label: 'Confirm Password',
      placeholder: 'Confirm password',
      type: 'password',
      id: 'confirmPassword',
      name: 'confirmPassword',
    },
  ],
  list: {
    documents: [],
    total: null,
  },
};

const News = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_NEWS_SUCCEEDED: {
      return {
        ...initialState,
        newsForm: {
          ...state.newsForm,
          ...props.entry,
        },
      };
    }
    case FETCH_NEWS_SUCCEEDED: {
      return {
        ...initialState,
        list: {
          documents: props.documents,
          total: props.documents.length,
        },
      };
    }

    case SET_SYSTEM_MSG: {
      swal.fire(props);
      return {
        ...state,
      };
    }

    case CLEAN_NEWS_FORM: {
      return {
        ...state,
        newsForm: {
          ...initialState.newsForm,
        },
      };
    }
    default:
      return state;
  }
};

export default News;
