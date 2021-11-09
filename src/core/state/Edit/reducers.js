import {
  REGISTER_USER,
} from './types';

const initialState = {
  registerForm: {
    email: '',
    password: '',
    confirmPassword: '',
    type: 'register',
  },
  registerFields: [
    {
      label: 'Emaasdadasil',
      placeholder: 'Emaasdsdil',
      type: 'email',
      id: 'email',
      name: 'email',
    },
    {
      label: 'Passasdword',
      placeholder: 'Passasdword',
      type: 'password',
      id: 'password',
      name: 'password',
    },
    {
      label: 'Confirm passwsadord',
      placeholder: 'Confirm paEditword',
      type: 'password',
      id: 'confirmPassword',
      name: 'confirmPassword',
    },
  ],
};

const Edit = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case REGISTER_USER: {
      return {
        ...initialState,
        registerForm: {
          ...state.registerForm,
          ...props.entry,
        },
      };
    }

    default:
      return state;
  }
};

export default Edit;
