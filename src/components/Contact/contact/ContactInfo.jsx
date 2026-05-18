"use client";

import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <section className="contact-section">

      {/* LEFT */}

      <div className="contact-left">

        <span className="contact-small">
          (Contact us)
        </span>

        <h1>
          We’d Love to Hear
          <br />
          from You
        </h1>

      </div>

      {/* RIGHT */}

      <div className="contact-right">

        <div className="contact-block">

          <span>(Address)</span>

          <p>
            Keizersgracht 241, 1016 EA
            <br />
            Amsterdam, Netherlands
          </p>

        </div>

        <div className="contact-block">

          <span>(Socials)</span>

          <div className="social-links">

            <a href="https://www.instagram.com">Instagram</a>

            <a href="https://x.com/">Twitter (X)</a>

          </div>

        </div>

        <div className="contact-block">

          <span>(Customer Support)</span>

          <a href="https://mail.google.com/">
            hello@marion.com
          </a>

        </div>

        <div className="contact-block">

          <span>(Partnerships & Collaborations)</span>

          <a href="https://mail.google.com/">
            collab@marion.com
          </a>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;