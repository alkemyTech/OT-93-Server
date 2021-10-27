import axios from 'axios';

const getToken = () => {
    const token = localStorage.getItem('token_agent');
    if (token) {
        return `Bearer ${token}`;
    }
    return null;
};

const config = {
    headers: { 
        Group: 93
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config) 
    .then(res => console.log(res)) 
    .catch(err => console.log(err)) 
}

export default Get

export const Patch = async (URI, id, body) => {
    const token = getToken();
    const header = {
      headers: {
        Group: "Grupo 93",
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: token
      },
    };
    try {
      let response = await axios.Patch(`${API}/${URI}${id}`, body, header);
      return response;
    } catch (error) {
      return error;
    }
  };