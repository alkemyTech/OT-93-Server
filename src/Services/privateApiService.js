import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const Post = async (URI, body) => {
  const config = getTokenHeader();
  try {
    const response = await axios.post(`${API}/${URI}`, body, config);
    return response;
  } catch (error) {
    return error;
  }
};
