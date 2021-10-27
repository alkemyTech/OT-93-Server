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

export default get