import React, { Fragment } from "react";
import MainHeading from "../MainHeading/MainHeading";
import styles from "./Testimonials.module.css";
import { testimonials } from "../../Util/data.jsx";

const Testimonials = () => {
  return (
    <Fragment>
      <MainHeading heading="Testimonials" paragraph1="" />
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => {
            return (
              <div key={item.id} className={styles.testimonialCard}>
                <div className={styles.testimonialsImage}>
                  <div className={styles.testimonialName}>
                    <img src={item.avatar} alt={item.name} loading="lazy" />
                    <h6>{item.name}</h6>
                  </div>
                  <span>{item.date}</span>
                </div>
                <div className={styles.testimonialDescription}>
                  <span>{item.title}</span>
                  <p>{item.testimonial}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
