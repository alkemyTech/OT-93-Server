import swal from 'sweetalert2';
import {
  SUBMIT_LOGIN_REQUESTED,
  CLEAN_LOGIN_FORM,
  SET_SYSTEM_MSG,
} from './types';

const initialState = {
  loginForm: {
    email: '',
    password: '',
  },
  loginFields: [
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
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
  ],
  user: {

  },
};

const Login = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case SUBMIT_LOGIN_REQUESTED: {
      return {
        ...initialState,
        loginForm: {
          ...state.loginForm,
        },
        user: { props },
      };
    }
    case SET_SYSTEM_MSG: {
      swal.fire(props);
      return {
        ...state,
      };
    }

    case CLEAN_LOGIN_FORM: {
      return {
        ...state,
        loginForm: {
          ...initialState.loginForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Login;