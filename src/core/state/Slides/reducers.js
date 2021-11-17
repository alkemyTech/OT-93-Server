import {
  FETCH_SLIDE_SUCCEEDED,
  FETCH_ONE_SLIDE_SUCCEEDED,
  CLEAN_SLIDE_FORM,
} from './types';

const initialState = {
  slideForm: {
    name: '',
    image: '',
    description: '',
    categoryId: 1,
    type: 'slides',
  },
  slideFields: [
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
      id: 'content',
      name: 'description',
    },
  ],
  list: {
    documents: [],
    total: null,
  },
};

const Slides = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_SLIDE_SUCCEEDED: {
      return {
        ...initialState,
        slideForm: {
          ...state.slideForm,
          ...props.entry,
        },
      };
    }
    case FETCH_SLIDE_SUCCEEDED: {
      return {
        ...initialState,
        list: {
          documents: props.documents,
          total: props.documents.length,
        },
      };
    }
    case CLEAN_SLIDE_FORM: {
      return {
        ...state,
        slideForm: {
          ...initialState.slideForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Slides;
