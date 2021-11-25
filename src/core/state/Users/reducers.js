import {
  REGISTER_USER,
  CLEAN_REGISTER_FORM,
} from './types';

const initialState = {
  registerForm: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: 'register',
  },
  registerFields: [
    {
      label: 'Nombre',
      placeholder: 'Nombre',
      type: 'text',
      id: 'name',
      name: 'name',
    },
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
    case CLEAN_REGISTER_FORM: {
      return {
        ...initialState,
        registerForm: {
          ...initialState.registerForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Users;
