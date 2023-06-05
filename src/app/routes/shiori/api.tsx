import { useHttpMutation } from "../../core/http";

const perfix = "https://shiori.0x64.ml";

const useLogin = () => {
  const { trigger, isMutating } = useHttpMutation("/shiori/api/login", { method: "POST" });

  return { trigger, isMutating };
};

export default {
  useLogin,
};
