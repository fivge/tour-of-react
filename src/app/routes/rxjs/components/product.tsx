import api from "../api";

const Product = () => {
  const { data, error, isLoading } = api.useProduct();

  return (
    <div>
      <div>price: {data?.price || "-"}!</div>
    </div>
  );
};

export default Product;
