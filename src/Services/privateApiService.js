import axios from 'axios'; // import axios
import getToken from '../utils/getToken'; // import gettoken

// DELETE
export const Delete = async (URI, id) => {
  // getting token
  const token = getToken();
  // set header
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
    console.log(error);
  }
};
