import React, { Fragment, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { NavigationLinks } from "../../Util/data.jsx";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // @ JSX START
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.navbar}>
          {/* @ NAV BAR FOR DEVICE WIDTH MORE THAN 768PX (DESKTOP, LAPTOP AND TAB )*/}
          <div className={styles.navBranding}>
            <img src={logo} alt="Sri Pranaya" className={styles.icon} />
          </div>

          <div className={styles.navMenu}>
            {NavigationLinks.map((item) => {
              return (
                <a href="#" key={item.id} exact>
                  {item.text}
                </a>
              );
            })}
          </div>

          <div
            className={`${styles.hamburger} ${drawerOpen ? styles.active : ""}`}
            onClick={toggleDrawer}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          {/* NAV BAR FOR DEVICE WIDTH LESS THAN 768PX (MOBILE )*/}
          <div
            className={`${styles.drawer} ${styles.hide_drawer} ${
              drawerOpen ? styles.open : ""
            }`}
          >
            <div className={styles.drawerContent}>
              {NavigationLinks.map((item) => {
                return (
                  <a
                    href="#"
                    className={styles.drawerItem}
                    key={item.id}
                    onClick={toggleDrawer}
                  >
                    {item.icon}&nbsp;&nbsp;&nbsp;{item.text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
