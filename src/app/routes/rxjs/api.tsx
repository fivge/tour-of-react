import useSWR from "swr";

const useProduct = () => {
  const { data, error, isLoading } = useSWR("http://localhost:3000/product/3");
  // const { data, error, isLoading } = useSWR(["http://localhost:3000/product/3", { method: "POST", params: { foo: "123" } }]);

  return {
    data,
    isLoading,
    error,
  };
};

export default {
  useProduct,
};
