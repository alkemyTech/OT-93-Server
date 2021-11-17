import {
  FETCH_CATEGORIES_SUCCEEDED,
  FETCH_ONE_CATEGORIES_SUCCEEDED,
  CLEAN_CATEGORIES_FORM,
} from './types';

const initialState = {
  categoryForm: {
    name: '',
    image: '',
    description: '',
    categoryId: 1,
    type: 'category',
  },
  catFields: [
    {
      label: 'Título',
      placeholder: 'Título',
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
      label: 'Contenido',
      placeholder: 'Contenido',
      type: 'CKEditor',
      id: 'content',
      name: 'description',
    },
  ],
  list: {
    documents: [],
    total: null,
  },
};

const Categories = (state = { ...initialState }, { type, ...props }) => {
  switch (type) {
    case FETCH_ONE_CATEGORIES_SUCCEEDED: {
      return {
        ...initialState,
        categoryForm: {
          ...state.categoryForm,
          ...props.entry,
        },
      };
    }
    case FETCH_CATEGORIES_SUCCEEDED: {
      return {
        ...initialState,
        list: {
          documents: {
            ...props.documents,
          },
        },
      };
    }
    case CLEAN_CATEGORIES_FORM: {
      return {
        ...state,
        categoryForm: {
          ...initialState.categoryForm,
        },
      };
    }
    default:
      return state;
  }
};

export default Categories;
