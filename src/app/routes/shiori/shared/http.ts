import useSWR from "swr";

import { useAuth } from "./auth.store";
import { useHttpMutation as useCoreHttpMutation } from "../../../core/http";
import { environment } from "../../../../environments/environment";

const perfix = "/api/v1";

const useHttp = <T>(uri, options: any = {}) => {
  const session = useAuth(state => state.session);
  const { auth = true } = options;

  if (auth) {
    options.headers = {
      "X-Session-Id": session,
    };
  }
  delete options.auth;

  const url = `${environment.shioriApi}${perfix}${uri}`;

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

  const url = `${environment.shioriApi}${perfix}${uri}`;

  return useCoreHttpMutation(url, { ...options });
};

export { useHttp, useHttpMutation };
