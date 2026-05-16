'use client'

import "./SimilarProducts.scss"

import Link from "next/link"

const SimilarProducts = ({ products }) => {

  return (

    <div className="similar-products">

      {/* TOP */}

      <div className="similar-top">

        <div className="similar-sub">
          (Recommended for you)
        </div>

        <div className="similar-head">
          You Might Like
        </div>

      </div>

      {/* GRID */}

      <div className="similar-grid">

        {products.map((product) => (

          <Link
            href={`/products/${product.slug}`}
            className="product-card"
            key={product.id}
          >

            {/* IMAGE */}

            <div className="product-image-wrapper">

              {/* BADGES */}
              <div className="product-badges">
                {product.oldPrice && <div className="product-badge">Sale</div>}
                {product.isNew && <div className="product-badge new">New</div>}
              </div>

              {/* MAIN IMAGE */}

              <img
                src={product.thumbnail}
                alt={product.name}
                className="product-image"
              />

              {/* HOVER IMAGE */}

              <img
                src={product.hoverImage}
                alt={product.name}
                className="product-image-hover"
              />

              {/* OVERLAY */}

              <div className="product-overlay-button">

                <span>Select Options</span>

                <img
                  src="/icons/arrow-right.png"
                  alt="arrow"
                />

              </div>

            </div>

            {/* INFO */}

            <div className="product-info">

              <div className="product-name">
                {product.name}
              </div>

              <div className="product-price-wrapper">

                <div className="product-price">
                  ${product.price}
                </div>

                {product.oldPrice && (

                  <div className="product-old-price">
                    ${product.oldPrice}
                  </div>

                )}

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  )
}

export default SimilarProducts