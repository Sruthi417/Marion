import "./Hero.scss";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-section">
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={1550}
          height={825}
          className="hero-image"
          priority
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-content-left">
            <div className="hero-sub">(Featured Collection)</div>
            <div className="hero-head">
              Timeless Essentials <br />
              for the Season
            </div>
          </div>
          <div className="hero-content-right">
            <Link href="/men">
              <button className="button">
                Shop Now
                <img
                  src="/icons/arrow-right.png"
                  alt="arrow"
                  className="arrow-icon"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
