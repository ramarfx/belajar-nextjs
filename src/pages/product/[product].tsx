import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../lib/swr/fetcher";
import DetailProductView from "@/views/DetailProduct";
import { query } from "firebase/firestore";
import { ProductType } from "@/types/product.type";

const DetailProductPage = ({product}: {product: ProductType}) => {
  const { query } = useRouter();
  // clientside
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/* clientside */}
      {/* <DetailProductView product={isLoading ? [] : data.data} /> */}

      {/* serverside */}
      <DetailProductView product={product} />
    </div>
  );
};

export default DetailProductPage;

// export async function getServerSideProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   console.log(params.product);

//   //fetch data
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch( `http://localhost:3000/api/product`)
  const response = await res.json()

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id
    }
  }))

  return {paths, fallback: false}
}

export async function getStaticProps({
  params,
}: {
  params: { product: string };
}) {
  console.log(params.product);

  //fetch data
  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
