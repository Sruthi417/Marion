import Link from "next/link";
import Image from "next/image";
import './Collections.scss'

const Collection = () => {
  return (
    <div className="collection-content">
      <div className="collection-content-left">
        
        <Link href="/men">
          <Image
            src="/images/Men.avif"
            height={900}
            width={775}
            alt="men"
            className="men-women"
          />
        </Link>
        


         <div className="overlay"></div>

        <div className="collection-con">
          <div className="men">
            Men's
            <br />
            Collection
          </div>
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
      <div className="collection-content-left">
        <Link href="/women">
          <Image
            src="/images/Women.avif"
            height={900}
            width={775}
            alt="women"
            className="men-women"
          />
        </Link>

         <div className="overlay"></div>

        <div className="collection-con">
          <div className="men">
            Women's
            <br />
            Collection
          </div>
          <Link href="/women">
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
  );
};
export default Collection;
