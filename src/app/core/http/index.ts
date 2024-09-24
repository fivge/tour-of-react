import axios, { CreateAxiosDefaults, AxiosResponse, AxiosInstance } from "axios";

const defaultAxiosConfig: CreateAxiosDefaults = {
  adapter: "fetch",
  timeout: 3000,
};

const http = axios.create({ ...defaultAxiosConfig });

const requestInterceptor = http.interceptors.request.use(
  config => config,
  error => error
);

const responseInterceptor = http.interceptors.response.use(
  response => response.data,
  error => {
    const { code, message, response, status } = error;
    const { data, headers } = response || {};
    const newError = {
      code,
      message,
      status,
      response: { data, headers },
    };

    // TODO: show message global ?
    // if (response && data) {
    //   return Promise.reject(data);
    // }
    return Promise.reject(newError);
  }
);

declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

const errorHandler = error => {
  let message = "";
  if (error.response && error.response.data) {
    message = error.response.data;
  } else {
    message = error.message;
  }
  return message;
};

export { http as default, defaultAxiosConfig, errorHandler };
