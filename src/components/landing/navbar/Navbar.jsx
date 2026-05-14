'use client'
import "./Navbar.scss";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".hero-section")?.offsetHeight;

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
    <div className={`nav ${scrolled ? "scrolled" : ""} ${isOpen ? "menu-open" : ""}`}>
      <div className="nav-full">
        <div className="nav-mobile-toggle">
          <button className={`menu__icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`nav-left ${isOpen ? "open" : ""}`}>
          <Link href="/men" className="nav-left-content" onClick={() => setIsOpen(false)}>
            Men
          </Link>
          <Link href="/women" className="nav-left-content" onClick={() => setIsOpen(false)}>
            Women
          </Link>
          <Link href="/our-story" className="nav-left-content" onClick={() => setIsOpen(false)}>
            Our Story
          </Link>
          <Link href="/contact" className="nav-left-content" onClick={() => setIsOpen(false)}>
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
            <img src={
                scrolled
                  ? "/icons/search-black.svg"
                  : "/icons/search-white.svg"
              } />
          </button>
          <Link href="/cart" className="nav-buttons">
            <img src={
                scrolled
                  ? "/icons/cart-black.png"
                  : "/icons/cart-white.png"
              } alt="Cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
