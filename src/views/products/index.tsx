/* eslint-disable @next/next/no-img-element */
import styles from "./product.module.css";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>
      <div className="flex">
        {products.length > 0 ? (
          products.map((product: ProductType) => {
            return (
              <div key={product.id} className="w-1/4 p-[10px]">
                <div>
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className="text-xl font-bold mt-1">{product.name}</h4>
                <p className="text-gray-500">{product.category}</p>
                <p className="font-bold mt-3">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            );
          })
        ) : (
          <div className={styles.skeleton}>
            <div className="w-full aspect-[1/1] bg-gray-500"></div>
            <div className="w-full h-5 mt-1 bg-gray-500"></div>
            <div className="w-full mt-1 h-4 bg-gray-500"></div>
            <div className="w-full h-4 mt-3 bg-gray-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
