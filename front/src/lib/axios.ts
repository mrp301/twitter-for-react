import axios, { AxiosInstance, AxiosResponse } from "axios";
import camelCaseKeys from "camelcase-keys";

// const $axios: AxiosInstance = axios.create({
//   baseURL: `http://localhost:3000/`,
//   headers: { "Content-Type": "application/json" },
//   responseType: "json",
// });

// $axios.interceptors.response.use(
//   (config: AxiosResponse) => {
//     config.headers["access-token"] = "Uo9Sl__hY41M5doI-rRI-A";
//     config.headers.uid = "rZ9lz6hAEYWU3kfrqV5gUg";
//     config.headers.client = "momo@gmail.com";
//     return config;
//   },
//   (response: AxiosResponse): AxiosResponse => {
//     const data = camelCaseKeys(response.data, { deep: true });
//     return { ...response.data, data };
//   }
// );

const $axios: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});

$axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return camelCaseKeys(response, { deep: true });
  }
);

export { $axios };
