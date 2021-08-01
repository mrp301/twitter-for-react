import axios, { AxiosInstance, AxiosResponse } from "axios";
import camelCaseKeys from "camelcase-keys";
import { getSessionAuth } from "../lib/index";

const $axios: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});

$axios.interceptors.request.use(
  (config) => {
    const auth = getSessionAuth();
    if (!!auth.uid) {
      config.headers.common["access-token"] = auth.token;
      config.headers.common["uid"] = auth.uid;
      config.headers.common["client"] = auth.client;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

$axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => camelCaseKeys(response, { deep: true })
);

export { $axios };
