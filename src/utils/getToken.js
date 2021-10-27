const getToken = () => {
  // getting token
  const token = localStorage.getItem("token");

  return token;
};

export default getToken;
