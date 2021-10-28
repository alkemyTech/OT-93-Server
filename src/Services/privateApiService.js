import axios from 'axios';

const config = {
  headers: {
    Group: 93,
  },
};

const Get = () => {
  axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
export default Get;

export const Patch = async (URI, id, body) => {
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
    const response = await axios.Patch(`${API}/${URI}${id}`, body, header);
    return response;
  } catch (error) {
    return error;
  }
};
export const Delete = async (URI, id) => {
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
    const response = await axios.post(`${API}/${URI}/${id}`, header);
    return JSON.stringify(response);
  } catch (error) {
    return (error);
  }
};
