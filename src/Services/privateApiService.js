import axios from 'axios';

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
