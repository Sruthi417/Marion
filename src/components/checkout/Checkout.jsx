"use client";

import "./Checkout.scss";

import Link from "next/link";

import useCartStore from "../../lib/store/carStore";

const Checkout = () => {

  const {
    isCheckoutOpen,
    closeCheckout,
    cartItems,
    removedCheckoutItems,
    removeCheckoutItem,
  } = useCartStore();

  const checkoutItems = cartItems.filter(
    (item) =>
      !removedCheckoutItems.some(
        (removed) =>
          removed.product_id === String(item.product_id) &&
          removed.size === item.size
      )
  );

  const subtotal = checkoutItems.reduce(
    (acc, item) =>
      acc + item.price * item.count,
    0
  );

  if (!isCheckoutOpen) return null;

  return (

    <div className="checkout-modal">

      {/* OVERLAY */}

      <div
        className="checkout-overlay"
        onClick={closeCheckout}
      />

      {/* CONTENT */}

      <div className="checkout-content">

        {/* TOP */}

        <div className="checkout-top">

          <div>
            <h1>Checkout</h1>

            <p>
              Fill in your details and place your order
            </p>
          </div>

          <button
            className="close-checkout"
            onClick={closeCheckout}
          >
            ×
          </button>

        </div>

        {/* BODY */}

        <div className="checkout-body">

          {/* LEFT */}

          <div className="checkout-left">

            <h2>Shipping Address</h2>

            <div className="checkout-form">

              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="double-input">

                <div className="input-group">
                  <label>Country</label>
                  <select defaultValue="US">
                    <option value="US">United States</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>State / Province</label>
                  <select defaultValue="">
                    <option value="">Select state</option>
                    <option value="NY">New York</option>
                    <option value="CA">California</option>
                  </select>
                </div>

              </div>

              <div className="double-input">

                <div className="input-group">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                  />
                </div>

                <div className="input-group">
                  <label>ZIP / Postal Code</label>
                  <input
                    type="text"
                    placeholder="Enter ZIP code"
                  />
                </div>

              </div>

              <div className="input-group">
                <label>Street Address</label>
                <input
                  type="text"
                  placeholder="Enter your street address"
                />
              </div>

              <div className="input-group">
                <label>Apartment, suite, etc. (optional)</label>
                <input
                  type="text"
                  placeholder="Enter apartment, suite, etc."
                />
              </div>

              <label className="save-info-checkbox">
                <input type="checkbox" defaultChecked />
                <span>Save this information for next time</span>
              </label>

            </div>

          </div>

          {/* RIGHT */}

          <div className="checkout-right">

            <h2>
              Your Order <span className="order-count">({checkoutItems.length} {checkoutItems.length === 1 ? 'item' : 'items'})</span>
            </h2>

            <div className="checkout-products">

              {checkoutItems.map((item, index) => (

                <div
                  className="checkout-item"
                  key={`${item.product_id}-${item.size}-${index}`}
                >

                  <img
                    src={item.thumbnail}
                    alt={item.name}
                  />

                  <div className="checkout-item-info">

                    <div className="checkout-name-row">
                      <h3>{item.name}</h3>
                    </div>

                    <p>Size: {item.size}</p>

                    <p>Qty: {item.count}</p>

                  </div>

                  <div className="checkout-price">
                    {item.price}$
                  </div>

                  <button
                    className="remove-checkout-item"
                    onClick={() =>
                      removeCheckoutItem(
                        item.product_id,
                        item.size
                      )
                    }
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>

            {/* TOTAL */}

            <div className="checkout-total">

              <div className="checkout-row">
                <span className="total-label">Subtotal</span>
                <span className="total-value">{subtotal}$</span>
              </div>

              <div className="checkout-row">
                <span className="total-label">Shipping</span>
                <span className="total-value">Free</span>
              </div>

              <div className="checkout-final">
                <span>Total</span>
                <span>{subtotal}$</span>
              </div>

            </div>

            {/* BUTTON */}
            <Link href="/under-development" className="place-holder-link">
              <button className="place-order-button">
                Place Order &nbsp;&nbsp;→
              </button>
            </Link>

            <div className="secure-checkout">
              <svg className="lock-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Your data is secure and encrypted</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Checkout;