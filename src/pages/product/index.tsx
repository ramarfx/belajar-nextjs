import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Product Page</p>
    </div>
  );
};

export default ProductPage;
