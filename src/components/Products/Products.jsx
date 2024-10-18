import React from "react";
import styles from "./Products.module.css";
import MainHeading from "../MainHeading/MainHeading";
import { productList } from "../../Util/data.jsx";

const Products = () => {
  return (
    <div className={styles.productContainer}>
      <MainHeading heading="Our Products" paragraph1="" paragraph2="" />
      <div className={styles.productsList}>
        {productList.map((item) => {
          return (
            <div key={item.id} className={styles.productItem}>
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
