import useSWRMutation from "swr/mutation";

import { fetcher } from "./http.provider";

const useHttpMutation = (url, options: any = {}) => {
  const { method } = options;

  const sendRequest = async (url, { arg }) => fetcher([url, { method, params: arg }]);

  const { trigger, isMutating } = useSWRMutation(url, sendRequest);

  return { trigger, isMutating };
};

export { useHttpMutation };
