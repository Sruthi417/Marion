"use client";
import "./Navbar.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Cart from "../../cart/Cart";
import Search from "../../search/Search";
import useCartStore from "../../../lib/store/carStore";

const Navbar = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const storeOpenCart = useCartStore((state) => state.openCart);
  const storeOpenSearch = useCartStore((state) => state.openSearch);

  const openCart = () => {
    setIsOpen(false);
    storeOpenCart();
  };

  const openSearch = () => {
    setIsOpen(false);
    storeOpenSearch();
  };

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
      // Find the hero element on the Home page (.heros-section) or other pages (.hero-section)
      const heroEl = document.querySelector(".heros-section") || document.querySelector(".hero-section");
      const heroHeight = heroEl?.offsetHeight;

      // Only perform scroll detection if hero element is present
      if (heroHeight !== undefined && window.scrollY > heroHeight - 100) {
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

  // Close the mobile menu on any route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
        <div className={`nav-left ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
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
          <Link href="/" className="nav-center-content" onClick={() => setIsOpen(false)}>
            MARION
          </Link>
        </div>
        <div className="nav-right">
          <button className="nav-button" onClick={openSearch}>
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
      <Search/>
    </div>
  );
};

export default Navbar;
