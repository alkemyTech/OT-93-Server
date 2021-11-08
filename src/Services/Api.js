// eslint-disable-next-line no-unused-vars
/* global API */
/* eslint-disable no-console */
import isString from 'lodash/isString';
import axios from 'axios';

const getTokenUser = () => {
  const token = localStorage.getItem('token_agent');
  if (token) {
    return `Bearer ${token}`;
  }
  return null;
};

export default class Api {
  static async get(URL) {
    const token = getTokenUser();
    try {
      return await axios.get(`http://ongapi.alkemy.org/api/${URL}`, {
        headers: token ? {
          Authorization: token,
        } : {},
      });
    } catch (err) {
      return console.log(err.message);
    }
  }

  static async post(URL, body) {
    const token = getTokenUser();
    try {
      return await axios.post(
        `http://ongapi.alkemy.org/api/${URL}`, isString(body) ? body : JSON.stringify(body), {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token || false,
          },
        },
      );
    } catch (err) {
      return err;
    }
  }

  static async put(URL, body) {
    const token = getTokenUser();
    try {
      return await axios.put(
        `http://ongapi.alkemy.org/api/${URL}`, body, {
          headers: token ? {
            Authorization: token,
          } : {},
        },
      );
    } catch (err) {
      return console.log(err.message);
    }
  }
}
