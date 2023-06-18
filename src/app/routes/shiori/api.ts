import useSWR from "swr";
import { useHttpMutation } from "../../core/http";
import { useHttp } from "./shared/http";

const perfix = "https://shiori.0x64.ml";

const useLogin = () => {
  const { trigger, isMutating } = useHttpMutation("/shiori/api/login", { method: "POST" });

  return { trigger, isMutating };
};

const useTags = <T>() => {
  const { data, error, isLoading } = useHttp<T>("/shiori/api/tags");

  return { data, error, isLoading };
};

// GET
const useBookmarks = <T>(params) => {
  const { tags } = params;
  const newParams = { ...params };

  if (tags === "all") {
    newParams.tags = null;
  } else if (tags === "untagged") {
    newParams.tags = null;
    newParams.exclude = "*";
  } else if (tags === "tagged") {
    newParams.tags = "*";
  }

  return useHttp<T>("/shiori/api/bookmarks", { params: newParams });
};

export default {
  useLogin,
  useTags,
  useBookmarks,
};
