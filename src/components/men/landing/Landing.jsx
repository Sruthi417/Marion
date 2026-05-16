import "./Landing.scss";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="men-hero">
      <div className="hero-section">
        <Image
          src="/images/Men.avif"
          alt="Hero"
          width={1550}
          height={600}
          className="hero-image"
          priority
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-head">For Men</div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
