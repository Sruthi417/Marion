import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      {/*flex direction colum*/}
      <div className="footer-container">
        {" "}
        {/* //grid 4 2row */}
        <div className="footer-card">
          <img src="/icons/cube.png" className="footer-card-icon" />
          <div className="footer-card-content">Free shipping from $149</div>
        </div>
        <div className="footer-card">
          <img src="/icons/undo.png" className="footer-card-icon" />
          <div className="footer-card-content">Easy returns within 30 days</div>
        </div>
        <div className="footer-card">
          <img src="/icons/secure.png" className="footer-card-icon" />
          <div className="footer-card-content">Secure payments online</div>
        </div>
        <div className="footer-card">
          <img src="/icons/people.png" className="footer-card-icon" />
          <div className="footer-card-content">24/7 customer support</div>
        </div>
        <div className="footer-no-card">
          {" "}
          {/*grid second colum */}
          <div className="footer-head">MARION</div>
          <div className="footer-head-content">© 2025 All Rights Reserved</div>
        </div>
        <div className="footer-content">
          <div className="footer-sub">
            {" "}
            {/*flex direction row*/}
            <div className="footer-sub-content">
              {" "}
              {/*flex direction column*/}
              <div className="sub">(Navigation)</div>
              <Link href="/index" className="head">
                Index
              </Link>
              <Link href="/men" className="head">
                Men
              </Link>
              <Link href="/women" className="head">
                Women
              </Link>
              <Link href="/our-story" className="head">
                Our Story
              </Link>
            </div>
            <div className="footer-sub-content">
              {" "}
              {/*flex direction column*/}
              <div className="sub">(Legal)</div>
              <Link href="/policy" className="head">
                Privacy Policy
              </Link>
              <Link href="/service" className="head">
                Terms of Service
              </Link>
            </div>
            <div className="footer-sub-content">
              {" "}
              {/*flex direction column*/}
              <div className="sub">(Help)</div>
              <Link href="/contact" className="head">
                Contact
              </Link>
              <Link href="/faq" className="head">
                FAQ
              </Link>
            </div>
          </div>

          <div className="newsletter">
            <div className="email-first">
                Subscribe to our newsletter for new arrivals and special offers
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Your Email"
                className="newsletter-input"
              />

              <button className="newsletter-button">Submit</button>
            </div>

            <div className="email-last">
              By subscribing to our newsletter, you agree to receive
              <br />
              emails from us and accept our
              <span className="privacy">
                <Link href="/policy"> Privacy Policy</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
