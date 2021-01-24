import axios from 'axios';

const $axios = axios.create({
  baseURL: `http://localhost:3000/api/v1/auth/`,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
});

export { $axios };
