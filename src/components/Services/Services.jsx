import React, { Fragment } from "react";
import styles from "./Services.module.css";
import service1 from "../../assets/printer.png";
import service2 from "../../assets/digital-printing.png";
import service3 from "../../assets/packaging.png";
import service4 from "../../assets/print.png";
import service5 from "../../assets/promotion.png";
import service6 from "../../assets/branding.png";
import MainHeading from "../MainHeading/MainHeading";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Offset Printing",
      description:
        "Ideal for large-volume projects, our offset printing services deliver unmatched precision and consistency. Perfect for flyers, brochures, catalogs, and more.",
      image: service1,
    },
    {
      id: 2,
      title: "Digital Printing",
      description:
        "Fast, flexible, and affordable digital printing solutions for smaller projects, personalized marketing materials, or quick-turnaround needs.",
      image: service2,
    },
    {
      id: 3,
      title: "Packaging & Labels",
      description:
        "Make your brand stand out with custom packaging solutions. From product boxes to labels, we provide a variety of options tailored to your brand's identity.",
      image: service3,
    },
    {
      id: 4,
      title: "Large Format Printing",
      description:
        "Create high-impact visuals with our large-format printing. Whether it's banners, posters, or exhibition displays, we bring your vision to life in vibrant color and detail.",
      image: service4,
    },
    {
      id: 5,
      title: "Promotional Products",
      description:
        "Customized promotional materials, including calendars, notebooks, T-shirts, and mugs, to strengthen your brand presence.",
      image: service5,
    },
    {
      id: 6,
      title: "Corporate Stationery",
      description:
        "Elevate your business with professional business cards, letterheads, envelopes, and more. Our stationery solutions help create a lasting impression.",
      image: service6,
    },
  ];

  return (
    <Fragment>
      <div className={styles.servicesContainer}>
        <MainHeading
          heading="Our Services"
          paragraph1="Customized Printing Solutions Tailored for You"
          paragraph2=" We offer a comprehensive range of printing services designed to meet
            the demands of businesses and individuals alike."
        />
        <div className={styles.containerItem}>
          {serviceList.map((item) => {
            return (
              <div key={item.id} className={styles.serviceItem}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
