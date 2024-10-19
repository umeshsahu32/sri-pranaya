import React, { Fragment } from "react";
import styles from "./Gallery.module.css";
import MainHeading from "../MainHeading/MainHeading";
import { galleryImages } from "../../Util/data.jsx";

const Gallery = () => {
  return (
    <Fragment>
      <MainHeading
        heading="Gallery"
        paragraph1="Our Portfolio Speaks for Itself"
        paragraph2="Browse through our collection of past projects to see the range and quality of our work. From business cards to banners, our portfolio showcases the diversity of our capabilities."
      />
      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          {galleryImages.map((item, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={item.productImage}
                alt={item.productName}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <p className={styles.text}>{item.productName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
