import useSWR from "swr";

import { useAuth } from "./store";
import { useHttpMutation as useCoreHttpMutation } from "../../../core/http";

const useHttp = <T>(uri, options: any = {}) => {
  const session = useAuth(state => state.session);
  const { auth = true } = options;

  if (auth) {
    options.headers = {
      "X-Session-Id": session,
    };
  }
  delete options.auth;

  return useSWR<T>([uri, { ...options }]);
};

const useHttpMutation = <T>(uri, options: any = {}) => {
  const session = useAuth(state => state.session);
  const { auth = true } = options;

  if (auth) {
    options.headers = {
      "X-Session-Id": session,
    };
  }
  delete options.auth;

  return useCoreHttpMutation(uri, { ...options });
};

export { useHttp, useHttpMutation };
