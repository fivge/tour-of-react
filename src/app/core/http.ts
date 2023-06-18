import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { fetcher } from "./http.provider";

const useHttp = (uri: string, options: any = {}) => {
  return useSWR([uri, options]);
};

const useHttpMutation = (uri: string, options: any = {}) => {
  const sendRequest = async (url, { arg }) => fetcher([url, { ...options, params: arg }]);

  const { trigger, isMutating } = useSWRMutation(uri, sendRequest);

  return { trigger, isMutating };
};

export { useHttp, useHttpMutation };
