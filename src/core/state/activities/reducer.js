/* eslint-disable no-undef */
import Swal from 'sweetalert2';
import {
  FETCH_ACTIVITIES_SUCCEEDED,
  FETCH_ONE_ACTIVITIES_SUCCEEDED,
  CLEAN_ACTIVITIES_FORM,
  SET_SYSTEM_MSG,
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
    case SET_SYSTEM_MSG:
      Swal.fire(props);
      return {
        ...state,
      };
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
