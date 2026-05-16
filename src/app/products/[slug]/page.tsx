import { products } from "@/src/lib/constants/Constant";

import ProductDetails from '../../../components/details/productdetails/ProductDetails'
import Navbar from "@/src/components/landing/navbar/Navbar";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {

  const { slug } = await params
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>

    <Navbar forceScrolled={true}/>

      <ProductDetails product={product} />

      {/* <SimilarProducts product={product} /> */}

    </>
  )
};

export default ProductPage;
