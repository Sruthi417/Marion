'use client'

import './collection.scss'
import Link from 'next/link'
import { useState } from 'react'
import { products } from '../../../lib/constants/Constant'

const Collection = () => {

  /* ACTIVE FILTER */

  const [activeCategory, setActiveCategory] = useState("All")

  /* MEN + UNISEX PRODUCTS */

  const womenProducts = products.filter(
    (product) =>
      product.gender === "Women" ||
      product.gender === "Unisex"
  )

  /* FILTER LOGIC */

  const filteredProducts = womenProducts.filter((product) => {

    /* ALL */

    if (activeCategory === "All") {
      return true
    }

    /* SALE */

    if (activeCategory === "Sale") {
      return product.oldPrice !== null
    }

    /* NEW ARRIVALS */

    if (activeCategory === "New Arrivals") {
      return product.isNew
    }

    /* CATEGORY FILTER */

    return product.category === activeCategory
  })

  return (
    <div className="landing">

      <div className="landing-container">

        {/* CATEGORY FILTERS */}

        <div className="landing-categories">

          <button
            className={
              activeCategory === "All"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>

          <button
            className={
              activeCategory === "Hoodies"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setActiveCategory("Hoodies")}
          >
            Hoodies
          </button>

          <button
            className={
              activeCategory === "T-Shirts"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setActiveCategory("T-Shirts")}
          >
            T-Shirts
          </button>

          <button
            className={
              activeCategory === "Pants"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setActiveCategory("Pants")}
          >
            Pants
          </button>

          <button
            className={
              activeCategory === "New Arrivals"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setActiveCategory("New Arrivals")}
          >
            New Arrivals
          </button>

          <button
            className={
              activeCategory === "Sale"
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setActiveCategory("Sale")}
          >
            Sale
          </button>

        </div>

        {/* PRODUCTS */}

        <div className="landing-products">

          {filteredProducts.map((product) => (

            <Link
              href={`/products/${product.slug}`}
              className="product-card"
              key={product.id}
            >

              <div className="product-image-wrapper">

                {/* SALE BADGE */}

                {product.oldPrice && (
                  <div className="product-badge">
                    Sale
                  </div>
                )}

                {/* NEW BADGE */}

                {product.isNew && (
                  <div className="product-badge new">
                    New
                  </div>
                )}

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

                {/* OVERLAY BUTTON */}

                <div className="product-overlay-button">

                  <span>Select Options</span>

                  <img
                    src="/icons/arrow-right.png"
                    alt="arrow"
                  />

                </div>

              </div>

              {/* PRODUCT INFO */}

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

    </div>
  )
}

export default Collection