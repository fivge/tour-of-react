import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import cookies from "js-cookie";

const cookieStorage: StateStorage = {
  getItem: (name: string) => {
    return cookies.get(name);
  },
  setItem: (name: string, value: string) => {
    try {
      const { state } = JSON.parse(value);
      let { expires } = state;
      expires = expires ? new Date(expires) : 1;
      cookies.set(name, value, { expires });
    } catch (error) {}
  },
  removeItem: (name: string) => {
    cookies.remove(name);
  },
};

const useAuth = create(
  persist<any>(
    (set, get) => ({
      session: "",
      // TODO: get account from JWT token
      account: null,
      expires: null,
      setAuth: auth => set(auth),
    }),
    {
      name: "shiori_auth",
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);

// {"session":"218d30dd-8340-4053-8ab8-0f3e3f1a4a1c","account":{"id":1,"username":"lux","owner":true},"expires":"Wed, 05 Jul 2023 19:16:25 UTC"}
export { useAuth };
