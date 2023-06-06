import { SWRConfig } from "swr";

import { HttpConfig } from "./http.interface";

export const fetcher = async (params: string | [string, HttpConfig]) => {
  let url = "";
  let config: HttpConfig = {};

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

  const res = await fetch(url, init);

  if (res.ok) {
    let res2 = await res.json();
    return res2;
  }

  if (res.headers) {
    const type = res.headers.get("Content-Type");
  }

  let error: any = new Error();
  try {
    error = await res.json();
    console.log("error1", error);
  } catch (e) {}

  try {
    error = await res.text();
    console.log("error2", error);
  } catch (e) {}

  console.log("error", error);

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
