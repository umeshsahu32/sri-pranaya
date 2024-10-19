import React from "react";
import styles from "./Products.module.css";
import MainHeading from "../MainHeading/MainHeading";
import { productList } from "../../Util/data.jsx";

const Products = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.sectionHead}>
        <h5>Our Product</h5>
      </div>
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
