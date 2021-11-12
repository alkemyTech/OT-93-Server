import { EDIT_USER } from './types';

const initialState = {
  userEditForm: {
    name: '',
    email: '',
    image: '',
    role: '',
    password: '',
    type: 'edituser',
  },
  userEditFields: [
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
};

const Edit = (state = { ...initialState }, { type, ...props }) => {
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

    default:
      return state;
  }
};

export default Edit;
