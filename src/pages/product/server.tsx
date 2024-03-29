import ProductView from "@/views/products";
import { ProductType } from "@/types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  {console.log(products)}
  return (
    <div>
      <ProductView products={products} />
    </div>
  );

};

export default ProductPage;

//ini dipanggil setiap melakukan request
export async function getServerSideProps() {
  //fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  console.log(response);

  return {
    props: {
      products: response.data,
    },
  };
}
