import axios from 'axios';

const config = {
  headers: {
    Group: 93,
  },
};

const Get = () => {
  axios.get('https://jsonplaceholder.typicode.com/users', config)
    // eslint-disable-next-line no-console
    .then((res) => console.log(res))
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
};
export default Get;

export const Patch = async (URI, id, body) => {
  // eslint-disable-next-line no-undef
  const token = getToken();
  const header = {
    headers: {
      Group: 'Grupo 93',
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
  try {
    // eslint-disable-next-line no-undef
    const response = await axios.Patch(`${API}/${URI}${id}`, body, header);
    return response;
  } catch (error) {
    return error;
  }
};
export const Delete = async (URI, id) => {
  // eslint-disable-next-line no-undef
  const token = getToken();
  const header = {
    headers: {
      Group: 'Grupo 93',
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  try {
    // eslint-disable-next-line no-undef
    const response = await axios.post(`${API}/${URI}/${id}`, header);
    return JSON.stringify(response);
  } catch (error) {
    return (error);
  }
};
