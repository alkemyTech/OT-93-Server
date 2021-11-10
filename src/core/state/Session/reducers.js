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
  slickSettings: {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
