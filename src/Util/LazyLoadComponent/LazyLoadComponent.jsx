import React, { useEffect, useRef, useState } from "react";
import styles from "./LazyLoad.module.css";

const LazyLoadComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: "100px", // Start loading when component is 100px from viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? (
        children
      ) : (
        <div className={styles.container} style={{ height: "100px" }}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default LazyLoadComponent;
