import React, { Fragment } from "react";
import styles from "./AboutUs.module.css";
import aboutUs from "../../assets/values/about-us.jpg";

const AboutUs = () => {
  return (
    <Fragment>
      <div className={styles.aboutUsContainer} id="about-us">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionImage}>
            <img src={aboutUs} alt="About Us Image" loading="lazy" />
          </div>
          <div className={styles.sectionContent}>
            <h6>About Us</h6>
            <p>A Legacy of Precision and Innovation</p>
            <p>
              At Sri Pranaya Printers, we believe in delivering more than just
              printed products. We create visual experiences that leave a
              lasting impression. With over 15 years of expertise, we've
              established ourselves as a trusted name in the printing industry,
              providing high-quality printing services tailored to meet our
              clients’ needs.
            </p>
            <p>
              Our team consists of skilled professionals who are passionate
              about bringing your ideas to life, from design to production. We
              combine craftsmanship with cutting-edge technology to ensure that
              every project is a masterpiece.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
