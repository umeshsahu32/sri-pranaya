import React, { useState, useEffect } from "react";
import styles from "./GoToTop.module.css";
import { IoIosArrowRoundUp } from "react-icons/io";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.goToTop}>
          <IoIosArrowRoundUp className={styles.icon} />
        </div>
      )}
    </>
  );
};

export default GoToTop;
