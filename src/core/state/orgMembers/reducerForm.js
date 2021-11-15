import {
  FETCH_ONE_MEMBERS_SUCCEEDED,
} from './types';

const initialState = {
  membersForm: {
    name: '',
    image: '',
    content: '',
    facebookUrl: '',
    linkedinUrl: '',
    categoryId: 1,
    type: 'members',
  },
  membersFields: [
    {
      label: 'Nombre',
      placeholder: 'Nombre',
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
      label: 'Descripción',
      placeholder: 'Descripción',
      type: 'CKEditor',
      id: 'content',
      name: 'content',
    },
    {
      label: 'Facebook',
      placeholder: 'Facebook',
      type: 'text',
      id: 'facebookUrl',
      name: 'facebookUrl',
    },
    {
      label: 'Linkedin',
      placeholder: 'Linkedin',
      type: 'text',
      id: 'linkedinUrl',
      name: 'linkedinUrl',
    },
  ],
};

const Members = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_MEMBERS_SUCCEEDED: {
      return {
        ...state,
        membersForm: {
          ...state.membersForm,
          ...props.entry,
        },
      };
    }
    default:
      return state;
  }
};

export default Members;
