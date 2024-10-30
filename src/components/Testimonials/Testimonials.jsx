import React, { Fragment } from "react";
import MainHeading from "../MainHeading/MainHeading";
import styles from "./Testimonials.module.css";
import { testimonials } from "../../Util/data.jsx";
import blockquote from "../../assets/blockquote.png";

const Testimonials = () => {
  return (
    <Fragment>
      <MainHeading heading="Testimonials" paragraph1="" />
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => {
            return (
              // <div key={item.id} className={styles.testimonialCard}>
              //   <div className={styles.testimonialsImage}>
              //     <div className={styles.testimonialName}>
              //       <img src={item.avatar} alt={item.name} loading="lazy" />
              //       <h6>{item.name}</h6>
              //     </div>
              //     <span>{item.date}</span>
              //   </div>
              //   <div className={styles.testimonialDescription}>
              //     <span>{item.title}</span>
              //     <p>{item.testimonial}</p>
              //   </div>
              // </div>
              <div key={item.id} className={styles.testimonialCard}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className={styles.userLogo}
                />
                {/* <img
                  src={blockquote}
                  alt="Blockquote"
                  className={styles.blockquote}
                /> */}
                <span>{item.title}</span>
                <p>{item.testimonial}</p>
                <div className={styles.userInfo}>
                  <span>{item.name}</span>
                  <span>{item.position}</span>
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
