/* eslint-disable no-console */
import axios from 'axios';

const Post = async (URI, body) => {
  const header = {
    headers: {
      Group: '93',
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(URI, body, header);
    return JSON.stringify(response);
  } catch (error) {
    return error;
  }
};

export default Post;
