import get from 'lodash/get';

const path = 'Members';

export const getMembersForm = (state) => get(state, `${path}.membersForm`);
export const getMembersFields = (state) => get(state, `${path}.membersFields`);
export const getMembers = (state) => get(state, `${path}.list.documents`);
export const getList = (state) => get(state, `${path}.list`);

export const getTableProps = () => {
  const headers = [
    {
      label: 'Nombre',
      key: 'name',
      className: 'border-0 pointer',
    },
    {
      label: 'Imagen',
      key: 'image',
      className: 'border-0 pointer text-center',
    },
    {
      label: 'Descripción',
      key: 'description',
      className: 'border-0 pointer text-center',
    },
    {
      label: 'Facebook',
      key: 'facebookUrl',
      className: 'border-0 pointer text-center',
    },
    {
      label: 'Linkedin',
      key: 'linkedinUrl',
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
      key: 'linkedinUrl',
      drawInformation: (document) => get(document, 'linkedinUrl'),
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
