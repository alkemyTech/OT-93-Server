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
      label: 'Password',
      placeholder: 'Password',
      type: 'password',
      id: 'password',
      name: 'password',
    },
    {
      label: 'Confirm password',
      placeholder: 'Confirm password',
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
