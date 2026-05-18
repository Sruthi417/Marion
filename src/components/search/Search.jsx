"use client";

import { useEffect, useRef, useState } from "react";
import "./Search.scss";
import { products } from "../../lib/constants/Constant";
import useCartStore from "../../lib/store/carStore";
import Link from "next/link";

const Search = () => {
  const isSearchOpen = useCartStore((state) => state.isSearchOpen);
  const closeSearch = useCartStore((state) => state.closeSearch);

  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  /* Auto-focus & body lock */
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isSearchOpen]);

  /* ESC to close */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeSearch]);

  /* Normalization helper to strip spaces and hyphens for smarter matching */
  const normalize = (str) => {
    if (!str) return "";
    return str.toLowerCase().replace(/[-\s]/g, "");
  };

  /* Filtered results */
  const results = query.trim()
    ? products.filter((product) => {
        const normQuery = normalize(query);
        
        const matchName = normalize(product.name).includes(normQuery);
        const matchSlug = normalize(product.slug).includes(normQuery);
        const matchDesc = normalize(product.description || "").includes(normQuery);
        const matchCategory = normalize(product.category || "").includes(normQuery);

        return matchName || matchSlug || matchDesc || matchCategory;
      })
    : [];

  /* Suggested/Trending products when query is empty */
  const suggestions = products.slice(0, 3);

  const handleResultClick = () => {
    closeSearch();
  };

  if (!isSearchOpen) return null;

  return (
    <div className={`search-modal ${isSearchOpen ? "open" : ""}`}>
      {/* Overlay */}
      <div className="search-overlay" onClick={closeSearch} />

      {/* Card */}
      <div className="search-card">
        {/* Input row */}
        <div className="search-input-row">
          {/* Search icon */}
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Close button */}
          <button className="search-close-btn" onClick={closeSearch}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Results or Suggestions */}
        <div className="search-results">
          {query.trim() ? (
            results.length > 0 ? (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="search-result-item"
                  onClick={handleResultClick}
                >
                  <span className="result-name">{product.name}</span>
                  <span className="result-route">/products/{product.slug}</span>
                </Link>
              ))
            ) : (
              <div className="search-no-results">No results</div>
            )
          ) : (
            <div className="search-suggestions">
              <div className="search-suggestions-title">Suggested Products</div>
              {suggestions.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="search-result-item"
                  onClick={handleResultClick}
                >
                  <span className="result-name">{product.name}</span>
                  <span className="result-route">/products/{product.slug}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
