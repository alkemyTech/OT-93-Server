/* eslint-disable no-unused-vars */
import get from 'lodash/get';

const path = 'Members';

// eslint-disable-next-line import/prefer-default-export
export const getList = (state) => get(state, `${path}.list`);

export const getTableProps = () => {
  const headers = [
    {
      label: 'Nombre',
      key: 'description',
      className: 'border-0 pointer',
    },
    {
      label: 'image',
      key: 'description',
      className: 'border-0 pointer text-center',
    },
    {
      label: 'description',
      key: 'description',
      className: 'border-0 pointer text-center',
    },
    {
      label: 'facebookUrl',
      key: 'description',
      className: 'border-0 pointer text-center',
    },
  ];
  const columns = [
    {
      key: 'name',
      drawInformation: (document) => get(document, 'name'),
    },
    {
      key: 'image',
      drawInformation: (document) => get(document, 'image'),
      className: 'text-left',
    },
    {
      key: 'description',
      drawInformation: (document) => get(document, 'description'),
      className: 'text-left',
    },
    {
      key: 'facebookUrl',
      drawInformation: (document) => get(document, 'facebookUrl'),
    },
    {
      actions: true,
      edit: true,
      view: true,
      delete: true,
      className: 'text-center',
    },
  ];
  return {
    headers,
    columns,
  };
};
