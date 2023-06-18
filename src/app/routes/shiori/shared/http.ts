import useSWR from "swr";

import { useAuth } from "./store";
import { useHttpMutation as useCoreHttpMutation } from "../../../core/http";
import { environment } from "../../../../environments/environment";

const useHttp = <T>(uri, options: any = {}) => {
  const session = useAuth(state => state.session);
  const { auth = true } = options;

  if (auth) {
    options.headers = {
      "X-Session-Id": session,
    };
  }
  delete options.auth;

  const url = `${environment.shioriApi}${uri}`;

  return useSWR<T>([url, { ...options }]);
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

  const url = `${environment.shioriApi}${uri}`;

  return useCoreHttpMutation(url, { ...options });
};

export { useHttp, useHttpMutation };
