import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  return <div className="w-full">{id}</div>;
};

export default Products;
