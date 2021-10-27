import axios from "axios";

const API = process.env.REACT_APP_API_URL;

//function for add authorization in header
const getToken = (token) => {
  const config = {
    headers: {
      Group: "Grupo 93",
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  return config;
};

// POST
const Post = (URI, body, token) => {
  //set config
  const config = getToken(token);
  // using axios for petition
  axios
    .post(`${API}/${URI}`, body, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};



export { Post };
