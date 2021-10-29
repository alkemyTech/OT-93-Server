import axios from 'axios';

const config = {
    headers: {
        Group: '93'
    }
}

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