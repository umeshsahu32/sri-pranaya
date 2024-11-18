import React, { Fragment, useState, useEffect } from "react";
import styles from "./KeyFeatures.module.css";
import whyUs from "../../assets/why-us-3.jpg";
import { keyFeaturesList } from "../../Util/data.jsx";

const useStaggeredAnimation = (itemCount, staggerDelay = 200) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timeouts = [];

    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * staggerDelay);
      timeouts.push(timeout);
    }

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [itemCount, staggerDelay]);

  return visibleItems;
};

const KeyFeatures = () => {
  const visibleItems = useStaggeredAnimation(keyFeaturesList.length);

  return (
    <Fragment>
      <div className={styles.featureContainer}>
        <div className={styles.sectionHead}>
          <h5>Why Choose Us</h5>
        </div>
        <div className={styles.featuresListContainer}>
          <div className={styles.featuresList}>
            {keyFeaturesList.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`${styles.featuresItem} ${styles.listItem} ${
                    visibleItems.includes(index) ? styles.visible : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  <p>
                    <strong>{item.title}: </strong>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.whyUsImage}>
            <img src={whyUs} alt="why choose us" loading="lazy" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default KeyFeatures;
