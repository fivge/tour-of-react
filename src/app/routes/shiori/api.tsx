import useSWR, { SWRConfig } from "swr";

const perfix = "https://shiori.0x64.ml";

export const HttpProvider = props => {
  const { children } = props;
  // const options = fetcher

  return (
    <SWRConfig
      value={parent => {
        console.log("parent", parent);

        return {
          ...parent,
          // dedupingInterval: parent.dedupingInterval * 5,
          // fallback: { a: 2, c: 2 },
        };
      }}
    >
      {children}
    </SWRConfig>
  );
};

// export default HttpProvider;

const useProduct = () => {
  const { data, error, isLoading } = useSWR("http://localhost:3000/product/3");
  // const { data, error, isLoading } = useSWR(["http://localhost:3000/product/3", { method: "POST", params: { foo: "123" } }]);

  return {
    data,
    isLoading,
    error,
  };
};

// {
// 	"username": "shiori",
// 	"password": "gopher",
// 	"remember": true,
// 	"owner": true
// }

const useLogin = params => {
  const { data, error, isLoading } = useSWR(["/api/login", { method: "POST", params }]);

  return {
    data,
    isLoading,
    error,
  };
};

const useF = params => {
  const { data, error, isLoading } = useSWR(["", { method: "POST", params }]);

  return {
    data,
    isLoading,
    error,
  };
};

export default {
  useLogin,
};

// perfix
