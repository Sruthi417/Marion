"use client";

import { useState } from "react";
import "./ProductDetails.scss";

const ProductDetails = ({ product }) => {
  const [openSizeGuide, setOpenSizeGuide] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  return (
    <>
      {/* SIZE GUIDE MODAL */}

      {openSizeGuide && (
        <div className="size-guide-modal">
          <div
            className="size-guide-overlay"
            onClick={() => setOpenSizeGuide(false)}
          ></div>

          <div className="size-guide-content">
            {/* TOP */}

            <div className="size-guide-top">
              <h2>Size Guide</h2>

              <button
                className="close-guide"
                onClick={() => setOpenSizeGuide(false)}
              >
                ×
              </button>
            </div>

            {/* HOODIE TABLE */}

            <div className="guide-section">
              <h3>Hoodie / T-shirt</h3>

              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (cm)</th>
                    <th>Length (cm)</th>
                    <th>Sleeve (cm)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>S</td>
                    <td>92–96</td>
                    <td>66–68</td>
                    <td>61–63</td>
                  </tr>

                  <tr>
                    <td>M</td>
                    <td>98–102</td>
                    <td>69–71</td>
                    <td>63–65</td>
                  </tr>

                  <tr>
                    <td>L</td>
                    <td>104–108</td>
                    <td>72–74</td>
                    <td>65–67</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PANTS TABLE */}

            <div className="guide-section">
              <h3>Pants</h3>

              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Waist (cm)</th>
                    <th>Hips (cm)</th>
                    <th>Length (cm)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>S</td>
                    <td>72–76</td>
                    <td>92–96</td>
                    <td>100–102</td>
                  </tr>

                  <tr>
                    <td>M</td>
                    <td>78–82</td>
                    <td>98–102</td>
                    <td>102–104</td>
                  </tr>

                  <tr>
                    <td>L</td>
                    <td>84–88</td>
                    <td>104–108</td>
                    <td>104–106</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MAIN PRODUCT */}

      <div className="product-detail">
        {/* LEFT IMAGES */}

        <div className="product-gallery">
          <div className="gallery-container">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className={
                  index === currentImageIndex
                    ? "gallery-image active"
                    : "gallery-image"
                }
              />
            ))}

            <button className="gallery-arrow prev" onClick={prevImage}>
              <img src="/icons/arrow-right.png" alt="prev" />
            </button>
            <button className="gallery-arrow next" onClick={nextImage}>
              <img src="/icons/arrow-right.png" alt="next" />
            </button>
          </div>
        </div>

        {/* RIGHT DETAILS */}

        <div className="product-content">
          <div className="product-badges-wrapper">
            {product.oldPrice && <div className="product-badge">Sale</div>}

            {product.isNew && <div className="product-badge new">New</div>}
          </div>

          {/* TITLE */}

          <h1 className="product-title">{product.name}</h1>

          {/* DESCRIPTION */}

          <div className="product-description">{product.description}</div>

          {/* SIZE */}

          <div className="size-wrapper">
            <div className="size-left">
              <div className="size-head">Size</div>

              <div className="sizes">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={
                      selectedSize === size
                        ? "size-button active"
                        : "size-button"
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE GUIDE */}

            <button
              className="size-guide-button"
              onClick={() => setOpenSizeGuide(true)}
            >
              <img src="/icons/size-guide.png" alt="size" />

              <span>Size guide</span>
            </button>
          </div>

          {/* PRICE */}

          <div className="product-price-wrapper">
            <div className="product-price">${product.price}</div>

            {product.oldPrice && (
              <div className="product-old-price">${product.oldPrice}</div>
            )}
          </div>

          {/* BUTTON */}

          <button className="add-cart-button">Add to Cart</button>

          {/* ACCORDION */}

          <div className="product-accordion">
            {/* DETAILS */}

            <div className="accordion-item">
              <div
                className="accordion-head"
                onClick={() =>
                  setActiveAccordion(
                    activeAccordion === "details" ? null : "details",
                  )
                }
              >
                <span>Details & Care</span>

                <img
                  src="/icons/arrow-down.png"
                  alt="arrow"
                  className={
                    activeAccordion === "details"
                      ? "accordion-arrow active"
                      : "accordion-arrow"
                  }
                />
              </div>

              <div className={`accordion-content-wrapper ${activeAccordion === "details" ? "open" : ""}`}>
                <div className="accordion-content">
                  <div className="accordion-inner">
                    Made from premium {product.fabric}. Gentle machine wash in cold water. Do not bleach. Tumble dry on low heat. Iron at low temperature if necessary.
                  </div>
                </div>
              </div>
            </div>

            {/* DELIVERY */}

            <div className="accordion-item">
              <div
                className="accordion-head"
                onClick={() =>
                  setActiveAccordion(
                    activeAccordion === "delivery" ? null : "delivery",
                  )
                }
              >
                <span>Delivery and Payment</span>

                <img
                  src="/icons/arrow-down.png"
                  alt="arrow"
                  className={
                    activeAccordion === "delivery"
                      ? "accordion-arrow active"
                      : "accordion-arrow"
                  }
                />
              </div>

              <div className={`accordion-content-wrapper ${activeAccordion === "delivery" ? "open" : ""}`}>
                <div className="accordion-content">
                  <div className="accordion-inner">
                    Free shipping on orders above $149. Delivery within 3–5 business days. <br/><br/>Secure payments via Visa, Mastercard, PayPal, Apple Pay and Google Pay.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RETURNS */}

          <div className="return-info">
            <img src="/icons/redo.png" alt="returns" />

            <span>Easy returns within 30 days</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
