import {
  FETCH_TESTIMONIAL_SUCCEEDED,
  FETCH_ONE_TESTIMONIAL_SUCCEEDED,
  CLEAN_TESTIMONIAL_FORM,
} from './types';

const initialState = {
  testimonialForm: {
    name: '',
    image: '',
    description: '',
    categoryId: 1,
    type: 'testimonial',
  },
  testimonialFields: [
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

const Testimonials = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_TESTIMONIAL_SUCCEEDED: {
      return {
        ...initialState,
        testimonialForm: {
          ...state.testimonialForm,
          ...props.entry,
        },
      };
    }
    case FETCH_TESTIMONIAL_SUCCEEDED: {
      return {
        ...initialState,
        list: {
          documents: props.documents,
          total: props.documents.length,
        },
      };
    }
    case CLEAN_TESTIMONIAL_FORM: {
      return {
        ...state,
        testimonialForm: {
          ...initialState.testimonialForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Testimonials;
