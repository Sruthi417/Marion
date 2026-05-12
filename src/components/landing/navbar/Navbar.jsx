'use client'
import "./Navbar.scss";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navbar = () => {

      const [scrolled, setScrolled] = useState(false);

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-full">
        <div className="nav-left">
          <Link href="/men" className="nav-left-content">
            Men
          </Link>
          <Link href="/women" className="nav-left-content">
            Women
          </Link>
          <Link href="/our-story" className="nav-left-content">
            
            Our Story
          </Link>
          <Link href="/contact" className="nav-left-content">
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
