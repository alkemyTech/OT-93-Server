import axios from 'axios';

export const Delete = async (URI, id) => {
  const config = getTokenHeader();
  try {
    const response = await axios.delete(`${API}/${URI}/${id}`, config);
    return response;
  } catch (error) {
    return error;
  }
};
