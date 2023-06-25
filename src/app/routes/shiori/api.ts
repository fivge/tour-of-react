import { useHttp, useHttpMutation } from "./shared/http";

const useLogin = () => {
  const { trigger, isMutating } = useHttpMutation("/api/login", { method: "POST" });

  return { trigger, isMutating };
};

const useTags = <T>() => {
  return useHttp<T>("/api/tags");
};

const useTagsUpdate = <T>() => {
  return useHttpMutation("/api/tag", { method: "PUT" });
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

  return useHttp<T>("/api/bookmarks", { params: newParams });
};

const useBookmarkUpdate = <T>() => {
  return useHttpMutation("/api/bookmarks", { method: "PUT" });
};

export default {
  useLogin,
  useTags,
  useTagsUpdate,
  useBookmarks,
  useBookmarkUpdate,
};
