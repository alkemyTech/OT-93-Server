import get from 'lodash/get';

const path = 'Project';

export const getProjectsForm = (state) => get(state, `${path}.projectForm`);
export const getProjectsFields = (state) => get(state, `${path}.projectFields`);
export const getProjects = (state) => get(state, `${path}.list.documents`);
export const getList = (state) => get(state, `${path}.list`);

export const getTableProps = () => {
  const headers = [
    {
      label: 'Título',
      key: 'title',
      className: 'border-0 pointer text-left',
    },
    {
      label: 'Descripción',
      key: 'description',
      className: 'border-0 pointer',
    },
    {
      label: 'Imágen',
      key: 'image',
      className: 'border-0 pointer text-center',
    },
    {
      label: 'Acciones',
      key: 'actions',
      className: 'border-0 pointer text-center',
    },
  ];
  const columns = [
    {
      key: 'title',
      drawInformation: (document) => get(document, 'title'),
    },
    {
      key: 'description',
      drawInformation: (document) => get(document, 'description'),
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
