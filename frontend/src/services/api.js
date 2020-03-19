import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

api.interceptors.request.use(async config => {
  const user = getToken();
  if (user) {
    config.headers.user = user._id;
  }
  return config;
});

export default api;