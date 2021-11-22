import { FETCH_ORGANIZATION_SUCCEEDED } from './types';

const initialState = {
  list: {
    documents: {},
    total: null,
  },
  organizationFields: [
    {
      label: 'Nombre',
      placeholder: 'Nombre',
      type: 'text',
      id: 'name',
      name: 'name',
    },
    {
      label: 'Logo',
      placeholder: 'Logo',
      type: 'text',
      id: 'logo',
      name: 'logo',
    },
    {
      label: 'Descripción breve',
      placeholder: 'Descripción breve',
      type: 'text',
      id: 'short_description',
      name: 'short_description',
    },
    {
      label: 'Descripción larga',
      placeholder: 'Descripción larga',
      type: 'CKEditor',
      id: 'long_description',
      name: 'long_description',
    },
    {
      label: 'Facebook',
      placeholder: 'Facebook',
      type: 'text',
      id: 'facebook',
      name: 'facebook_url',
    },
    {
      label: 'Instagram',
      placeholder: 'Instagram',
      type: 'text',
      id: 'instagram',
      name: 'instagram_url',
    },
    {
      label: 'Linkedin',
      placeholder: 'Linkedin',
      type: 'text',
      id: 'linkedin',
      name: 'linkedin_url',
    },
    {
      label: 'Twitter',
      placeholder: 'Twitter',
      type: 'text',
      id: 'twitter',
      name: 'twitter_url',
    },
  ],
};

const Organization = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ORGANIZATION_SUCCEEDED: {
      return {
        ...state,
        list: {
          documents: props.documents,
        },
      };
    }
    default:
      return state;
  }
};

export default Organization;
