import axios from "axios"; //import axios
import getToken from "../utils/getToken"; //import gettoken

// getting API-URL
const API = process.env.REACT_APP_API_URL;

// POST
export const Post = async (URI, body) => {
  //getting token
  const token = getToken();

  //set header
  const header = {
    headers: {
      Group: "Grupo 93",
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  try {
    let response = await axios.post(`${API}/${URI}`, body, header);
    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
  }
};
