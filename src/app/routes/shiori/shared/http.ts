import useSWR from "swr";

import { useAuth } from "./store";

const useHttp = <T>(uri, options: any = {}) => {
  const session = useAuth(state => state.session);
  const { auth = true } = options;

  if (auth) {
    options.headers = {
      "X-Session-Id": session,
    };
  }
  delete options.auth;

  const { data, error, isLoading } = useSWR<T>([uri, { ...options }]);

  return { data, error, isLoading };
};

export { useHttp };
