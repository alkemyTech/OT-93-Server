import {
  FETCH_MEMBERS_SUCCEEDED,
  FETCH_ONE_MEMBERS_SUCCEEDED,
  CLEAN_MEMBERS_FORM,
} from './types';

const initialState = {
  membersForm: {
    name: '',
    image: '',
    description: '',
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
      id: 'description',
      name: 'description',
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
  list: {
    documents: [],
    total: null,
  },
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
    case FETCH_MEMBERS_SUCCEEDED: {
      return {
        ...state,
        list: {
          documents: props.documents,
        },
      };
    }
    case CLEAN_MEMBERS_FORM: {
      return {
        ...state,
        activityForm: {
          ...initialState.membersForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Members;
