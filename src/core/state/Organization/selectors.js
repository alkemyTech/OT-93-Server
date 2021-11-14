import get from 'lodash/get';

const path = 'Organization';

export const getOrganization = (state) => get(state, `${path}.list.documents`);
export const getList = (state) => get(state, `${path}.list`);

export const getTableProps = () => {
  const headers = [
    {
      label: '#ID',
      key: 'id',
      className: 'border-0 pointer',
    },
    {
      label: 'Nombre',
      key: 'name',
      className: 'border-0 pointer text-left',
    },
    {
      label: 'Image',
      key: 'description',
      className: 'border-0 pointer',
    },
    {
      label: 'Organization',
      key: 'organization',
      className: 'border-0 pointer text-center',
    },
  ];
  const columns = [
    {
      key: 'id',
      drawInformation: (document) => get(document, 'id'),
    },
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
