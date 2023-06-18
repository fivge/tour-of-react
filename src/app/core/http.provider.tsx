import { SWRConfig } from "swr";

import { HttpConfig } from "./http.interface";

const typeMap = {
  json: ["application/json"],
  text: ["text/plain"],
};

/**
 * res to json|text|...
 */
const responseDataHander = (res: Response) => {
  const type = res.headers.get("Content-Type");
  if (typeMap.json.find(i => type.includes(i))) {
    return res.json();
  }

  if (typeMap.text.find(i => type.includes(i))) {
    return res.text();
  }

  return res;
};

export const fetcher = async (params: string | [string, HttpConfig]) => {
  let url = "";
  let config: HttpConfig = {};

  if (Array.isArray(params)) {
    [url, config] = params;
  } else {
    url = params;
  }

  const { perfix, method, headers = {} } = config;

  if (perfix && !(url.startsWith("http://") || url.startsWith("https://"))) {
    url = `${perfix}${url}`;
  }

  const init: RequestInit = {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    mode: "cors",
  };

  // GET searchParams
  if (init.method === "GET" && config.params) {
    const searchParams = new URLSearchParams();
    let searchParamsStr = "";

    for (let key in config.params) {
      const value = config.params[key];
      if (value !== null && value !== undefined) {
        searchParams.set(key, value);
      }
    }

    searchParamsStr = searchParams.toString();

    if (searchParamsStr) {
      if (url.includes("?")) {
        url = `${url}&${searchParamsStr}`;
      } else {
        url = `${url}?${searchParamsStr}`;
      }
    }
  }

  // POST body
  if (init.method === "POST") {
    init.body = JSON.stringify(config.params || {});
  }

  const res = await fetch(url, init);
  const data = await responseDataHander(res);

  if (res.ok) {
    return data;
  }

  throw data;
};

const options = {
  fetcher,
};

const HttpProvider = props => {
  const { children } = props;

  return <SWRConfig value={options}>{children}</SWRConfig>;
};

export default HttpProvider;
