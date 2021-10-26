import axios from "axios";
const Post = (URI, body, token) => {
  //set config
  const config = {
    headers: {
      // "Grupo":  93,
      "User-Agent": "Grupo 93",
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  // using axios for petition
  axios
    .post(URI, body, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const Delete = (URI, token) => {
  //set config
  const config = {
    headers: {
      // "Grupo":  93,
      "User-Agent": "Grupo 93",
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  // using axios for petition
  axios
    .delete(URI, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export {Post,Delete} ;
