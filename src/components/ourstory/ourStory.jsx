import "./ourStory.scss";
import Image from "next/image";
import Link from "next/link";

const OurStory = () => {
  return (
    <div className="ourstory">
      <div className="ourstory-image">
        <Image
          src="/images/ourstory.png"
          height={800}
          width={1550}
          alt="ourstory"
          className="ourstoryimage"
        />
         <div className="overlay"></div>
         <div className="ourstory-content">
            <div className="ourstory-content-left">
            <div className="ourstory-content-sub">(About Marion)</div>
            <div className="ourstory-content-head">Pieces beyond seasons, created <br/>to adapt and remain timeless</div>
            </div>
            <div className="ourstory-content-right">
                 <Link href="/our-story">
              <button className="button">
                Our Story
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

export default OurStory;
