import Swal from 'sweetalert2';
import {
  EDIT_USER,
  CLEAN_FORM,
  FETCH_USERS_SUCCEEDED,
  SET_SYSTEM_MSG,
} from './types';

const initialState = {
  userForm: {
    name: '',
    email: '',
    image: '',
    role: '',
    password: '',
    type: 'edituser',
  },
  userFields: [
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
      label: 'Imagen',
      placeholder: 'Imagen',
      type: 'text',
      id: 'image',
      name: 'image',
    },
    {
      label: 'Rol',
      placeholder: 'Selecciona el rol',
      type: 'dropdown',
      id: 'role',
      name: 'role',
      options: [
        {
          key: 1,
          value: 'usuario',
        },
        {
          key: 2,
          value: 'admin',
        },
      ],
    },
    {
      label: 'Contraseña',
      placeholder: 'Contraseña',
      type: 'password',
      id: 'password',
      name: 'password',
    },
  ],
  list: {
    documents: [],
    total: null,
  },
};

const UserEdit = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case EDIT_USER: {
      return {
        ...initialState,
        userEditForm: {
          ...state.userEditForm,
          ...props.entry,
        },
      };
    }
    case FETCH_USERS_SUCCEEDED: {
      return {
        ...initialState,
        list: {
          documents: {
            ...props.documents,
          },
        },
      };
    }
    case CLEAN_FORM: {
      return {
        ...state,
        userForm: {
          ...initialState.userForm,
        },
      };
    }
    case SET_SYSTEM_MSG:
      Swal.fire(props);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default UserEdit;
