import { products } from "@/src/lib/constants/Constant";

import ProductDetails from "../../../components/details/productdetails/ProductDetails";
import SimilarProducts from '../../../components/details/similarproducts/SimilarProducts'
import Navbar from "@/src/components/landing/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const similarProducts = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );

  return (
    <>
      <Navbar forceScrolled={true} />

      <ProductDetails product={product} />

        <SimilarProducts products={similarProducts} /> 

        <Footer/>
    </>
  );
};

export default ProductPage;
