import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
      <p>Product Page</p>
      {products.map((product: ProductType) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default ProductPage;
