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
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
      id: 'email',
      name: 'email',
    },
    {
      label: 'Contraseña',
      placeholder: 'Contraseña',
      type: 'password',
      id: 'password',
      name: 'password',
    },
    {
      label: 'Confirmar contraseña',
      placeholder: 'Confirmar contraseña',
      type: 'password',
      id: 'confirmPassword',
      name: 'confirmPassword',
    },
  ],
};

const Users = (state = { ...initialState }, { type, ...props }) => {
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

export default Users;
