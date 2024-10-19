import React, { Fragment, useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { NavigationLinks } from "../../Util/data.jsx";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const scrollToSection = (event) => {
    event.preventDefault();
    const sectionId = event.currentTarget.getAttribute("href").slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      let sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      sectionTop = sectionTop - 60;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const toggleDrawer = (event) => {
    if (event.currentTarget.getAttribute("href")) {
      scrollToSection(event);
    }
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.navBranding}>
            <img src={logo} alt="Sri Pranaya" className={styles.icon} />
          </div>

          <div className={styles.navMenu}>
            {NavigationLinks.map((item) => (
              <a href={item.path} key={item.id} onClick={scrollToSection}>
                {item.text}
              </a>
            ))}
          </div>

          <div
            className={`${styles.hamburger} ${drawerOpen ? styles.active : ""}`}
            onClick={toggleDrawer}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>

          <div
            className={`${styles.drawer} ${styles.hide_drawer} ${
              drawerOpen ? styles.open : ""
            }`}
          >
            <div className={styles.drawerContent}>
              {NavigationLinks.map((item) => (
                <a
                  href={item.path}
                  className={styles.drawerItem}
                  key={item.id}
                  onClick={toggleDrawer}
                >
                  {item.icon}&nbsp;&nbsp;&nbsp;{item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
