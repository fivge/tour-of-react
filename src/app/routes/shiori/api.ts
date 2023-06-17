import useSWR from "swr";
import { useHttpMutation } from "../../core/http";
import { useHttp } from "./shared/http";

const perfix = "https://shiori.0x64.ml";

const useLogin = () => {
  const { trigger, isMutating } = useHttpMutation("/shiori/api/login", { method: "POST" });

  return { trigger, isMutating };
};

const useTags = <T>() => {
  const { data, error, isLoading } = useHttp<T>("/shiori/api/tags", { foo: "bar" });

  return { data, error, isLoading };
};

// GET
const useBookmarks = <T>(params) => {
  const { data, error, isLoading } = useHttp<T>("/shiori/api/bookmarks", params);

  return { data, error, isLoading };
};

export default {
  useLogin,
  useTags,
  useBookmarks,
};
