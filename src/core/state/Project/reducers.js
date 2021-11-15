/* eslint-disable no-undef */
import {
  FETCH_PROJECTS_SUCCEEDED,
  FETCH_ONE_PROJECTS_SUCCEEDED,
  CLEAN_PROJECTS_FORM,
} from './types';

const initialState = {
  projectForm: {
    title: '',
    image: '',
    description: '',
    categoryId: 1,
    type: 'project',
  },
  projectFields: [
    {
      label: 'Título',
      placeholder: 'Título',
      type: 'text',
      id: 'title',
      name: 'title',
    },
    {
      label: 'Imagen',
      placeholder: 'Imagen',
      type: 'text',
      id: 'image',
      name: 'image',
    },
    {
      label: 'Fecha',
      placeholder: 'Fecha',
      type: 'text',
      id: 'due_date',
      name: 'due_date',
    },
    {
      label: 'Descripción',
      placeholder: 'Descripción',
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

const Projects = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_PROJECTS_SUCCEEDED: {
      return {
        ...initialState,
        projectForm: {
          ...state.projectForm,
          ...props.entry,
        },
      };
    }
    case FETCH_PROJECTS_SUCCEEDED: {
      return {
        ...initialState,
        list: {
          documents: props.documents,
        },
      };
    }
    case CLEAN_PROJECTS_FORM: {
      return {
        ...state,
        projectForm: {
          ...initialState.projectForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Projects;
