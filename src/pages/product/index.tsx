import ProductView from "@/views/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../lib/swr/fetcher";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  
  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setProducts(res.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
