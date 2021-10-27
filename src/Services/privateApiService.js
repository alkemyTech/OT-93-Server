import axios from "axios";

const config = {
  headers: {
    Group: 01, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;

export const Put = async (URI, id, body) => {
  const token = getToken();
  const header = {
    headers: {
      Group: "Grupo 93",
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  try {
    let response = await axios.put(`${API}/${URI}${id}`, body, header);
    return response;
  } catch (error) {
    return error;
  }
};
