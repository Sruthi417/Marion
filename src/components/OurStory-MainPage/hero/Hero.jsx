import "./hero.scss";
import Image from "next/image";
import Link from "next/link";

const Ourstory = () => {
    return (
      <div className="hero">
        <div className="hero-section">
          <Image
            src="/images/our.png"
            alt="Hero"
            width={1550}
            height={600}
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-head">Our Story</div>
          </div>
        </div>
      </div>
    );
};

export default Ourstory;
