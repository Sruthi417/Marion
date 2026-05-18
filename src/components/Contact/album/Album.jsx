"use client";

import "./Album.scss";

import Image from "next/image";

const Gallery = () => {
  return (
    <section className="gallery-section">

      <div className="gallery-wrapper">

        {/* LEFT IMAGE */}

        <div className="gallery-image-container">

          <Image
            src="/images/man1.png"
            alt="Fashion Model"
            width={900}
            height={700}
            className="gallery-image"
          />

        </div>

        {/* RIGHT IMAGE */}

        <div className="gallery-image-container">

          <Image
            src="/images/man2.jpg"
            alt="Fashion Model"
            width={900}
            height={700}
            className="gallery-image"
          />

        </div>

      </div>

    </section>
  );
};

export default Gallery;