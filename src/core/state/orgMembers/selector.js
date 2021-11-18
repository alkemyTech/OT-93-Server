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
