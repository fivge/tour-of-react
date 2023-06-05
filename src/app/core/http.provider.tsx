import { SWRConfig } from "swr";

const fetcher = async params => {
  let url = "";
  let config: any = {};

  if (Array.isArray(params)) {
    [url, config] = params;
  } else {
    url = params;
  }

  const init: RequestInit = {
    method: config.method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (init.method === "POST") {
    init.body = JSON.stringify(config.params || {});
  }

  let res = await fetch(url, init);

  if (res.ok) {
    res = await res.json();
    return res;
  }

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
