import "./Landing.scss";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="women-hero">
      <div className="hero-section">
        <Image
          src="/images/Women.avif"
          alt="Hero"
          width={1550}
          height={600}
          className="hero-image"
          priority
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-head">For Women</div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
