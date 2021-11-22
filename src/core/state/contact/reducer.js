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
    email: '',
    phone: '',
    message: '',
  },
  contactFields: [
    {
      label: 'Nombre',
      placeholder: 'Name',
      type: 'text',
      id: 'name',
      name: 'name',
      initialValue: 'loco',
    },
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
      id: 'email',
      name: 'email',
    },
    {
      label: 'Teléfono',
      placeholder: 'Teléfono',
      type: 'string',
      id: 'phone',
      name: 'phone',
    },
    {
      label: 'Mensaje',
      placeholder: 'Mensaje',
      type: 'textarea',
      id: 'message',
      name: 'message',
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
