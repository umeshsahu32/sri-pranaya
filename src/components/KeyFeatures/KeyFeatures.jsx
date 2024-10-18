import React, { Fragment } from "react";
import styles from "./KeyFeatures.module.css";
import aboutUs from "../../assets/why-us.png";
import { keyFeaturesList } from "../../Util/data.jsx";

const KeyFeatures = () => {
  return (
    <Fragment>
      <div className={styles.aboutUsContainer}>
        <h6>Why Choose Us</h6>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionContent}>
            {keyFeaturesList.map((item) => {
              return (
                <div className={styles.itemList}>
                  <span>{item.icon}</span>
                  <p>
                    <strong>{item.title}: </strong>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.sectionImage}>
            <img src={aboutUs} alt="About Us Image" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default KeyFeatures;
