"use client";
import "./Navbar.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cart from "../../cart/Cart";
import useCartStore from "../../../lib/store/carStore";

const Navbar = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openCart = useCartStore((state) => state.openCart);

  const cartItems = useCartStore((state) => state.cartItems);

  /* TOTAL COUNT */

  const totalCount = cartItems.length;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section")?.offsetHeight;

      if (window.scrollY > heroHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset"; // Cleanup
    };
  }, []);

  return (
    <div
      className={`nav ${
        scrolled || forceScrolled ? "scrolled" : ""
      } ${isOpen ? "menu-open" : ""}`}
    >
      <div className="nav-full">
        <div className="nav-mobile-toggle">
          <button
            className={`menu__icon ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`nav-left ${isOpen ? "open" : ""}`}>
          <Link
            href="/men"
            className="nav-left-content"
            onClick={() => setIsOpen(false)}
          >
            Men
          </Link>
          <Link
            href="/women"
            className="nav-left-content"
            onClick={() => setIsOpen(false)}
          >
            Women
          </Link>
          <Link
            href="/our-story"
            className="nav-left-content"
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/contact"
            className="nav-left-content"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div className="nav-center">
          <Link href="/" className="nav-center-content">
            MARION
          </Link>
        </div>
        <div className="nav-right">
          <button className="nav-button">
            <img
              src={
                scrolled || forceScrolled
                  ? "/icons/search-black.svg"
                  : "/icons/search-white.svg"
              }
            />
          </button>
          <button className="nav-buttons" onClick={openCart}>
            <img
              src={
                scrolled || forceScrolled
                  ? "/icons/cart-black.png"
                  : "/icons/cart-white.png"
              }
              alt="Cart"
            />

            {totalCount > 0 && <div className="cart-count">{totalCount}</div>}
          </button>
        </div>
      </div>
      <Cart/>
    </div>
  );
};
export default Navbar;
