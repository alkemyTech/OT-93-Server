/* eslint-disable no-undef */
import axios from 'axios';

const getTokenHeader = () => {
  const token = localStorage.getItem('token_agent');
  if (token) {
    const header = {
      headers: {
        Group: 'Grupo 93',
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    return header;
  }
  return null;
};

export async function Get(URI, id) {
  const config = getTokenHeader();
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

export const Patch = async (URI, id, body) => {
  const config = getTokenHeader();
  try {
    const response = await axios.Patch(`${API}/${URI}${id}`, body, config);
    return response;
  } catch (error) {
    return error;
  }
};
export const Delete = async (URI, id) => {
  const config = getTokenHeader();
  try {
    const response = await axios.post(`${API}/${URI}/${id}`, config);
    return JSON.stringify(response);
  } catch (error) {
    return (error);
  }
};
