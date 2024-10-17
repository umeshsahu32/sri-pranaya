import React, { Fragment } from "react";
import styles from "./Gallery.module.css";
import MainHeading from "../MainHeading/MainHeading";

import product1 from "../../assets/products/product1.jpg";
import product2 from "../../assets/products/product2.jpg";
import product3 from "../../assets/products/product3.jpg";
import product4 from "../../assets/products/product4.jpg";
import product5 from "../../assets/products/product5.jpg";
import product6 from "../../assets/products/product6.jpg";
import product7 from "../../assets/products/product7.jpg";
import product8 from "../../assets/products/product8.jpg";
import product9 from "../../assets/products/product9.jpg";
import product10 from "../../assets/products/product10.jpg";

const Gallery = () => {
  const products = [
    { id: 1, productImage: product1, productName: "Product 1" },
    { id: 2, productImage: product2, productName: "Product 2" },
    { id: 3, productImage: product3, productName: "Product 3" },
    { id: 4, productImage: product4, productName: "Product 4" },
    { id: 5, productImage: product5, productName: "Product 5" },
    { id: 6, productImage: product6, productName: "Product 6" },
    { id: 7, productImage: product7, productName: "Product 7" },
    { id: 8, productImage: product8, productName: "Product 8" },
    { id: 9, productImage: product9, productName: "Product 9" },
    { id: 10, productImage: product10, productName: "Product 10" },
  ];

  return (
    <Fragment>
      <div className={styles.galleryContainer}>
        <MainHeading
          heading="Gallery"
          paragraph1="Our Portfolio Speaks for Itself"
          paragraph2="Browse through our collection of past projects to see the range and quality of our work. From business cards to banners, our portfolio showcases the diversity of our capabilities."
        />
        <div className={styles.gallery}>
          {products.map((item, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={item.productImage}
                alt={item.productName}
                className={styles.image}
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
