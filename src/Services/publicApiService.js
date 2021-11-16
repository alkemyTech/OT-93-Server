/* eslint-disable no-console */
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const Post = async (URI, body) => {
  const header = {
    headers: {
      Group: '93',
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(`${API}/${URI}`, body, header);
    return response;
  } catch (error) {
    return error;
  }
};

export async function Get(URI, id) {
  try {
    if (id) {
      const response = await axios.get(`${API}${URI}/${id}`);
      return response;
    }
    const response = await axios.get(`${API}${URI}`);
    return response;
  } catch (error) {
    return error;
  }
}
