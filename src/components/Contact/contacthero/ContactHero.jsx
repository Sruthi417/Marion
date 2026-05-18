import "./ContactHero.scss";
import Image from "next/image";
import Link from "next/link";

const ContactHero = () => {
    return (
      <div className="contact-hero">
        <div className="hero-section">
          <Image
            src="/images/contact.jpg"
            alt="Hero"
            width={1550}
            height={600}
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-head">Contact</div>
          </div>
        </div>
      </div>
    );
};

export default ContactHero;
