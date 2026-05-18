"use client";

import React from "react";
import "./TermsOfService.scss";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <div className="terms-header-sticky">
          <p className="terms-date">(Last Update: 28.09.25)</p>
          <h1>Terms of Service</h1>
        </div>
      </div>
      
      <div className="terms-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Marion. These Terms of Service govern your use of our website and the purchase of products. By accessing our site or making a purchase, you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            To use our services, you must be at least 18 years old or visiting under the supervision of a parent or guardian. You agree to provide accurate and complete information when making purchases.
          </p>
        </section>

        <section>
          <h2>3. Products & Availability</h2>
          <p>
            We strive to display our products as accurately as possible. However, we do not guarantee that product descriptions, colors, or other content are fully accurate, complete, or error-free. All products are subject to availability.
          </p>
        </section>

        <section>
          <h2>4. Pricing & Payments</h2>
          <p>
            All prices are subject to change without notice. We accept various payment methods, which are securely processed. You agree to pay all charges incurred by you or any users of your account.
          </p>
        </section>

        <section>
          <h2>5. Shipping & Delivery</h2>
          <p>
            We will arrange for the shipment of products to you. Delivery schedules are estimates and cannot be guaranteed. We are not liable for delays beyond our reasonable control.
          </p>
        </section>

        <section>
          <h2>6. Returns & Refunds</h2>
          <p>
            If you are not satisfied with your purchase, you may return it in accordance with our Return Policy. Items must be in their original condition and packaging.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            All content on the Marion website, including text, graphics, logos, and images, is the property of Marion or its content suppliers and is protected by international copyright laws.
          </p>
        </section>

        <section>
          <h2>8. User Conduct</h2>
          <p>
            You agree not to use the website for any unlawful purpose or in any way that might harm, damage, or disparage any other party. Harassment or abusive language will not be tolerated.
          </p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>
            Marion shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or products.
          </p>
        </section>

        <section>
          <h2>10. Privacy</h2>
          <p>
            Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
          </p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2>12. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms of Service, please contact us at hello@marion.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
