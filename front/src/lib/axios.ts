import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import camelCaseKeys from 'camelcase-keys';

const $axios: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1/auth/`,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
});

$axios.interceptors.response.use(
  (config: AxiosResponse) => {
    config.headers['access-token'] = '9zCe6skKM9uO-IEIlAiavw';
    config.headers.uid = 'tfusHyISiOvZvWLJARBFAQ';
    config.headers.client = 'hoge@gmail.com';
    return config;
  },
  (response: AxiosResponse): AxiosResponse => {
    return camelCaseKeys(response, { deep: true });
  },
);

export { $axios };