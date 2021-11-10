import get from 'lodash/get';

const path = 'Slides';

export const getSlideForm = (state) => get(state, `${path}.slideForm`);
export const getSlideFields = (state) => get(state, `${path}.slideFields`);
export const getSlide = (state) => get(state, `${path}.list.documents`);
export const getList = (state) => get(state, `${path}.list`);

export const getTableProps = () => {
  const headers = [
    {
      label: 'Titulo',
      key: 'name',
      className: 'border-0 pointer text-left',
    },
    {
      label: 'Imagen',
      key: 'image',
      className: 'border-0 pointer',
    },
    {
      label: 'Orden',
      key: 'order',
      className: 'border-0 pointer',
    },
    {
      label: 'Acciones',
      key: 'actions',
      className: 'border-0 pointer text-center',
    },
  ];
  const columns = [
    {
      key: 'name',
      drawInformation: (document) => get(document, 'name'),
      className: 'text-left',
    },
    {
      key: 'image',
      drawInformation: (document) => get(document, 'image'),
    },
    {
      key: 'order',
      drawInformation: (document) => get(document, 'order'),
    },
    {
      actions: true,
      edit: true,
      delete: true,
      className: 'text-center',
    },
  ];
  return {
    headers,
    columns,
  };
};
