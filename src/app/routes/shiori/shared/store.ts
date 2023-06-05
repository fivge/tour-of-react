import { create } from "zustand";

const useAuth = create(set => ({
  session: "",
  account: null,
  expires: "",
  setAuth: () => set(state => ({ ...state })),
}));

// {"session":"218d30dd-8340-4053-8ab8-0f3e3f1a4a1c","account":{"id":1,"username":"lux","owner":true},"expires":"Wed, 05 Jul 2023 19:16:25 UTC"}
export { useAuth };
