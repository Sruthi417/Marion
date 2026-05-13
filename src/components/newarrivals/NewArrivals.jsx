import "./NewArrivals.scss";
import { products } from "../../lib/constants/Constant";
import Link from "next/link";

const NewArrivals = () => {
  const newProducts = products.filter((product) => product.isNew);

  return (
    <div className="newArrivals">
      <div className="newArrivals-content">
        <div className="newArrivals-content-sub">(New Arrivals)</div>
        <div className="newArrivals-content-head">
          This Season's <br />
          Must-Haves
        </div>
      </div>
      <div className="newArrivals-products">
        {newProducts.map((product) => (
          <div className="new-card" key={product.id}>
            <Link href={`/products/${product.slug}`}>
              <div className="new-image-wrapper">
                <div className="new-badge">New</div>

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

              <div className="product-price">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
