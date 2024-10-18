import React, { Fragment } from "react";
import MainHeading from "../MainHeading/MainHeading";
import styles from "./Testimonials.module.css";
import avatar1 from "../../assets/testimonials/avatar1.png";
import avatar2 from "../../assets/testimonials/avatar2.png";
import avatar3 from "../../assets/testimonials/avatar3.png";
import avatar4 from "../../assets/testimonials/avatar4.png";
import avatar5 from "../../assets/testimonials/avatar5.png";
import avatar6 from "../../assets/testimonials/avatar6.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      avatar: avatar1,
      name: "Vikram Gupta",
      position: "Event Manager",
      testimonial:
        "Working with this printing press has been a game-changer for our company. Their attention to detail and quality in banner printing, books, and corporate stationery is unparalleled. Highly recommend for all your printing needs.",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Rohit Verma",
      position: "Marketing Head",
      testimonial:
        "Their services are top-notch! From banners to brochures, every print job we’ve received has been impeccable. The team is professional, friendly, and always delivers on time. Couldn't ask for a better partner for our printing needs.",
    },
    {
      id: 3,
      avatar: avatar3,
      name: "Anjali Sharma",
      position: "Creative Director",
      testimonial:
        "Absolutely impressed with the quality and speed of their printing services. They've handled our corporate stationery and book printing projects with ease and excellence. Their customer service is exceptional too.",
    },
    {
      id: 4,
      avatar: avatar4,
      name: "Suresh Patil",
      position: "Event Coordinator",
      testimonial:
        "This printing press has exceeded our expectations time and again. Their expertise in banner printing and corporate stationery has been invaluable for our events. Truly a reliable and high-quality service provider.",
    },
    {
      id: 5,
      avatar: avatar5,
      name: "Priya Singh",
      position: "Operations Manager",
      testimonial:
        "Their printing solutions have been crucial for our branding efforts. From banners to books, the quality and consistency they offer are fantastic. The team is highly professional and responsive. Couldn't be happier with their services.",
    },
    {
      id: 6,
      avatar: avatar6,
      name: "Praveen Rao",
      position: "Product Manager",
      testimonial:
        "Our go-to printing press for all our corporate needs. They’ve never failed to deliver high-quality prints, whether it’s for corporate stationery or promotional banners. Their service is quick, efficient, and always up to our standards.",
    },
  ];

  return (
    <Fragment>
      <div className={styles.testimonialContainer}>
        <MainHeading heading="Testimonials" />
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => {
            return (
              <div key={item.id} className={styles.testimonialCard}>
                <div className={styles.testimonialsImage}>
                  <img src={item.avatar} />
                  <div className={styles.testimonialName}>
                    <h6>{item.name}</h6>
                    <span>{item.position}</span>
                  </div>
                </div>
                <p>{item.testimonial}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
