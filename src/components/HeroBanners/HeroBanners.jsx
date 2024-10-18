import React, { useState, useEffect } from "react";
import styles from "./HeroBanners.module.css";
import { slides } from "../../Util/data.jsx";

const HeroBanners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.carouselSlide} ${
            index === currentSlide ? styles.active : ""
          }`}
        >
          <img src={slide.image} alt={slide.text} />
          <div className={styles.slideText}>{slide.text}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanners;
