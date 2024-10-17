import React, { useState, useEffect } from "react";
import styles from "./HeroBanners.module.css";
<<<<<<< HEAD
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
=======

const slides = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Welcome to our website",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728853487293-1a4c5c39b393?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Discover amazing products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1728567409684-e42ba81a3c34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
>>>>>>> 90eee29a6a1b6e7413042279bf771422d114ce7d
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
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className={styles.slideText}>{slide.text}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanners;
