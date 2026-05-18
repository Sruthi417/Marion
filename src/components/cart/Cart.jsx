'use client'

import "./cart.scss"

import useCartStore from "../../lib/store/carStore"

const Cart = () => {

  const {

    cartItems,

    isCartOpen,

    closeCart,

    incrementCount,

    decrementCount,

    removeProduct

  } = useCartStore()

  /* SUBTOTAL */

  const subtotal = cartItems.reduce(

    (acc, item) =>

      acc + item.price * item.count,

    0

  )

  return (

    <>

      {/* OVERLAY */}

      <div
        className={
          isCartOpen
            ? "cart-overlay active"
            : "cart-overlay"
        }
        onClick={closeCart}
      />

      {/* DRAWER */}

      <div
        className={
          isCartOpen
            ? "cart-sidebar active"
            : "cart-sidebar"
        }
      >

        {/* TOP */}

        <div className="cart-top">

          <h2>Your cart</h2>

          <button
            className="close-cart"
            onClick={closeCart}
          >
            ×
          </button>

        </div>

        {/* ITEMS */}

        <div className="cart-items">

          {cartItems.length === 0 ? (

            <div className="empty-cart">

              <h3>Your cart is empty</h3>

              <p>
                Add some items to the cart.
              </p>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                className="cart-item"
                key={`${item.product_id}-${item.size}`}
              >

                {/* IMAGE */}

                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="cart-item-image"
                />

                {/* INFO */}

                <div className="cart-item-info">

                  <div className="cart-item-top">

                    <div>

                      <div className="cart-item-name">
                        {item.name}
                      </div>

                      <div className="cart-item-size">
                        {item.size || "S"}
                      </div>

                    </div>

                    <div className="cart-item-price">
                      ${item.price}
                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div className="cart-item-actions">

                    <div className="quantity-controls">

                      <button
                        onClick={() =>

                          decrementCount(
                            item.product_id,
                            item.size
                          )

                        }
                      >
                        −
                      </button>

                      <span>
                        {item.count}
                      </span>

                      <button
                        onClick={() =>

                          incrementCount(
                            item.product_id,
                            item.size
                          )

                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="remove-item"
                      onClick={() =>

                        removeProduct(
                          item.product_id,
                          item.size
                        )

                      }
                    >
                      ×
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* BOTTOM */}

        <div className="cart-bottom">

          <div className="shipping-row">
            <span className="shipping-label">Shipping</span>
            <span className="shipping-value">At Checkout</span>
          </div>

          <div className="subtotal-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <button className="checkout-button">
            Checkout
          </button>

        </div>

      </div>

    </>

  )
}

export default Cart