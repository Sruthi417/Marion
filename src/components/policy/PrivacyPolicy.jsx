"use client";

import React from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <div className="privacy-header-sticky">
          <p className="privacy-date">(Last Update: 28.09.25)</p>
          <h1>Privacy Policy</h1>
        </div>
      </div>
      
      <div className="privacy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Marion. We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when registering on the website, expressing an interest in obtaining information about us or our products, or otherwise contacting us.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes, including to provide and deliver products, process payments, and send you related information.
          </p>
        </section>

        <section>
          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to access or store information. You can set your browser to refuse all or some browser cookies, but this may affect your experience on our site.
          </p>
        </section>

        <section>
          <h2>5. Payments</h2>
          <p>
            We process your payment information securely. We do not store your credit card details; they are processed securely by our trusted payment providers.
          </p>
        </section>

        <section>
          <h2>6. Shipping Information</h2>
          <p>
            We collect shipping information to fulfill your orders. This information is shared with our trusted shipping partners solely for the purpose of delivering your purchases.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Services</h2>
          <p>
            We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
          </p>
        </section>

        <section>
          <h2>8. Data Protection</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
          </p>
        </section>

        <section>
          <h2>9. User Rights</h2>
          <p>
            You have the right to request access to, correction, or deletion of your personal data. If you would like to exercise any of these rights, please contact us.
          </p>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <p>
            If you have questions or comments about this policy, you may email us at hello@marion.com or by post to our registered address.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
