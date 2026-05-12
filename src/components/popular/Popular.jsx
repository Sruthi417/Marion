import "./Popular.scss";
import { products } from "../../lib/constants/Constant";
import Link from "next/link";
import Image from "next/image";
const Popular = () => {
  const popularProducts = products.filter((product) => product.isPopular);

  return (
    <div className="popular">
      <div className="popular-content">
        <div className="popular-content-sub">(Bestsellers)</div>
        <div className="popular-content-head">
          Our Most Popular <br />
          Pieces This Season
        </div>
        <div className="popular-products">
          {popularProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Link href={`/products/${product.slug}`}>
                <div className="product-image-wrapper">
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    width={500}
                    height={700}
                    className="product-image"
                  />

                  <div className="product-overlay-button">
                    <span>Select Options</span>

                    <img src="/icons/arrow-right.png" alt="Arrow" />
                  </div>
                </div>
              </Link>
              <div className="product-info">
                <div className="product-name">{product.name}</div>

                <div className="product-price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
