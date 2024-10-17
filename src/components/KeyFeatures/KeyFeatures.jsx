import React, { Fragment } from "react";
import styles from "./KeyFeatures.module.css";
import aboutUs from "../../assets/why-us.png";
import { FaRandom, FaLeaf } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";

const KeyFeatures = () => {
  const keyFeaturesList = [
    {
      id: 1,
      title: "Diverse Solutions",
      description:
        "From business cards to packaging, we offer a wide range of printing services.",
      icon: <FaRandom />,
    },
    {
      id: 2,
      title: "Sustainable Practices",
      description:
        "Eco-friendly printing solutions to reduce environmental impact.",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Advanced Technology",
      description: "Cutting-edge printing equipment for superior quality.",
      icon: <RiComputerLine />,
    },
    {
      id: 4,
      title: "Reliable Service",
      description: "On-time delivery, every time, guaranteed.",
      icon: <GiSandsOfTime />,
    },
  ];

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
