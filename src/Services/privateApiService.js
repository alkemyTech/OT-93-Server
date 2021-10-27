import axios from "axios"; //import axios
import getToken from "../utils/getToken"; //import gettoken

// DELETE
export const Delete = async (URI, id) => {
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
    let response = await axios.post(`${process.env.REACT_APP_API_URL}/${URI}/${id}`, header);
    return JSON.stringify(response);
  } catch (error) {
    console.log(error);
  }
};

