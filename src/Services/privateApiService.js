/* eslint-disable no-undef */
import axios from 'axios';
import { getToken } from '../utils';

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
    const response = await axios.delete(`${API}/${URI}/${id}`, header);
    return JSON.stringify(response);
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.log(error);
  }
};

export async function Get(URI, id) {
  const config = getToken();
  try {
    if (id) {
      const response = await axios.get(`${'API'}/${URI}/${id}`, config);
      return JSON.stringify(response);
    }
    const response = await axios.get(`${'API'}/${URI}`, config);
    return JSON.stringify(response);
  } catch (error) {
    return error;
  }
}
