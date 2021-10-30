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

const get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const Put = async (URL, id, body) => {
    const config = getTokenHeader();
    
    try {
      const response = await axios.put(`${API}/${URI}${id}`, body, config);
    return response;
    } catch (err) {
      return err;
    }
  }


export default get
