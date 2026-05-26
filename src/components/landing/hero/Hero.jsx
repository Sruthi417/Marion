import "./Hero.scss";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heros-section">
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={1550}
          height={825}
          className="heros-image"
          priority
        />

        <div className="heros-overlay"></div>

        <div className="heros-content">
          <div className="heros-content-left">
            <div className="heros-sub">(Featured Collection)</div>
            <div className="heros-head">
              Timeless Essentials <br />
              for the Season
            </div>
          </div>
          <div className="heros-content-right">
            <Link href="/men">
              <button className="button">
                Shop Now
                <img
                  src="/icons/arrow-right.png"
                  alt="arrow"
                  className="arrows-icon"
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
