import axios from "axios"; // import axios
import getToken from "../utils/getToken"; // import gettoken

const get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const Put = async (URI, id, body) => {
  const config = getTokenHeader();
  try {
    const response = await axios.put(`${API}/${URI}${id}`, body, config);
    return response;
  } catch (err) {
    return err;
  }
};

export default get;
export { Put };
