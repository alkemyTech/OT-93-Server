/* eslint-disable no-undef */
import {
  FETCH_ACTIVITIES_SUCCEEDED,
  FETCH_ONE_ACTIVITIES_SUCCEEDED,
  CLEAN_ACTIVITIES_FORM,
} from './types';

const initialState = {
  activityForm: {
    name: '',
    image: '',
    description: '',
    categoryId: 1,
    type: 'activity',
  },
  actFields: [
    {
      label: 'Título',
      placeholder: 'Título',
      type: 'text',
      id: 'name',
      name: 'name',
    },
    {
      label: 'Imagen',
      placeholder: 'Imagen',
      type: 'text',
      id: 'image',
      name: 'image',
    },
    {
      label: 'Contenido',
      placeholder: 'Contenido',
      type: 'CKEditor',
      id: 'description',
      name: 'description',
    },
  ],
  slidesShow: 5,
  list: {
    documents: [],
    total: null,
  },
};

const Activities = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_ACTIVITIES_SUCCEEDED: {
      return {
        ...initialState,
        activityForm: {
          ...state.activityForm,
          ...props.entry,
        },
      };
    }
    case FETCH_ACTIVITIES_SUCCEEDED: {
      return {
        ...initialState,
        list: {
          documents: props.documents,
        },
      };
    }
    case CLEAN_ACTIVITIES_FORM: {
      return {
        ...state,
        activityForm: {
          ...initialState.activityForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Activities;
