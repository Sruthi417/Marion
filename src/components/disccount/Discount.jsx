import "./discount.scss";
import { products } from "../../lib/constants/Constant";
import Link from "next/link";

const Discount = () => {
  const discountProducts = products.filter((product) => product.oldPrice !== null);

  return (
    <div className="discount">
      <div className="discount-content">
        <div className="discount-content-sub">(Discounts)</div>
        <div className="discount-content-head">
          Top Picks, <br />
          Now on Discount
        </div>
      </div>
      <div className="discount-products">
        {discountProducts.map((product) => (
          <div className="new-card" key={product.id}>
            <Link href={`/products/${product.slug}`}>
              <div className="new-image-wrapper">
                <div className="new-badge">Sale</div>

                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="new-image main-image"
                />

                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="new-image hover-image"
                />

                <div className="product-overlay-button">
                  <span>Select Options</span>

                  <img src="/icons/arrow-right.png" alt="arrow" />
                </div>
              </div>
            </Link>

            <div className="product-info">
              <div className="product-name">{product.name}</div>

             <div className="product-prices">
              <div className="product-price">${product.price}</div>
              <div className="product-discount-price">${product.oldPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
