import React, { useState, useEffect } from "react";
import styles from "./HeroBanners.module.css";
import banner1 from "../../assets/banners/banner1.avif";
import banner2 from "../../assets/banners/banner2.avif";
import banner3 from "../../assets/banners/banner3.avif";

const slides = [
  {
    image: banner1,
    text: "Welcome to our website",
  },
  {
    image: banner2,
    text: "Discover amazing products",
  },
  {
    image: banner3,
    text: "Join our community today",
  },
];

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
