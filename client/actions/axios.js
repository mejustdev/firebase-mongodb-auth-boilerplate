import axios from 'axios';
import firebase from '../firebase/firebase.js';

export const axiosPublic = axios.create({
  baseURL: 'https://limitless-reef-22338.herokuapp.com/api',
});

export const axiosAuth = axios.create({
  baseURL: 'https://limitless-reef-22338.herokuapp.com/api',
});

axiosAuth.interceptors.request.use(
  async (config) => {
    let user = await firebase.auth().currentUser;
    config.headers.token = user ? await user.getIdToken(true) : '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
