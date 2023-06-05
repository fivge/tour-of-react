import { SWRConfig } from "swr";

import { HttpConfig } from "./http.interface";

export const fetcher = async (params: string | [string, HttpConfig]) => {
  let url = "";
  let config: HttpConfig = {};

  console.log("p", params);

  if (Array.isArray(params)) {
    [url, config] = params;
  } else {
    url = params;
  }

  const { perfix, mode } = config;

  if (perfix && !(url.startsWith("http://") || url.startsWith("https://"))) {
    url = `${perfix}${url}`;
  }

  const init: RequestInit = {
    method: config.method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: mode || "cors",
  };

  if (init.method === "POST") {
    init.body = JSON.stringify(config.params || {});
  }

  let res = await fetch(url, init);

  console.log("typeof res", res, typeof res);

  return await res.json();

  if (res.ok) {
    res = await res.json();
    return res;
  }

  console.log("typeof res", res, typeof res);

  const error = await res.json();
  throw error;
};

const options = {
  fetcher,
};

const HttpProvider = props => {
  const { children } = props;

  return <SWRConfig value={options}>{children}</SWRConfig>;
};

export default HttpProvider;
