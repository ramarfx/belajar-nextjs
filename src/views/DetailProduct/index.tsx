import { ProductType } from "@/types/product.type";

const DetailProductView = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className="text-center text-4xl">detail product</h1>
      <div className="w-1/4 p-[10px] mx-auto">
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className="text-xl font-bold mt-1">{product.name}</h4>
        <p className="text-gray-500">{product.category}</p>
        <p className="font-bold mt-3">
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProductView;
