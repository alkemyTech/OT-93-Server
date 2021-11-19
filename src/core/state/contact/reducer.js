import Swal from 'sweetalert2';
import {
  FETCH_CONTACT_SUCCEEDED,
  FETCH_ONE_CONTACT_SUCCEEDED,
  CLEAN_CONTACT_FORM,
  SET_SYSTEM_MSG,
} from './types';

const initialState = {
  contactForm: {
    name: '',
    image: '',
    description: '',
    contactId: 1,
    type: 'contact',
  },
  contactFields: [
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

const Contact = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_CONTACT_SUCCEEDED: {
      return {
        ...initialState,
        contactForm: {
          ...state.contactForm,
          ...props.entry,
        },
      };
    }
    case FETCH_CONTACT_SUCCEEDED: {
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

    case CLEAN_CONTACT_FORM: {
      return {
        ...state,
        contactForm: {
          ...initialState.contactForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Contact;
