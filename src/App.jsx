import React, { Fragment, lazy, Suspense } from "react";

import Header from "./components/Header/Header";
import HeroBanners from "./components/HeroBanners/HeroBanners";
import MainHeading from "./components/MainHeading/MainHeading";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/GoToTop";

const LazyLoadComponent = lazy(() =>
  import("./Util/LazyLoadComponent/LazyLoadComponent")
);

const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const OurValues = lazy(() => import("./components/OurValues/OurValues"));
const KeyFeatures = lazy(() => import("./components/KeyFeatures/KeyFeatures"));
const Services = lazy(() => import("./components/Services/Services"));
const Products = lazy(() => import("./components/Products/Products"));
const ClientServed = lazy(() =>
  import("./components/ClientServed/ClientServed")
);
const Testimonials = lazy(() =>
  import("./components/Testimonials/Testimonials")
);
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));

const App = () => {
  let title = "Quality Printing for Every Need";
  let para1 =
    "Welcome to Sri Pranaya Printers, where your printing dreams come to life. We specialize in high-quality, affordable printing solutions for businesses, individuals, and institutions. Whether you need custom packaging, promotional materials, or stunning marketing collateral, we've got you covered. Our state-of-the-art equipment and experienced team ensure exceptional results every time.";
  let para2 =
    "Explore our range of services and discover how we can help elevate your brand with our printing expertise.";

  return (
    <Fragment>
      <Header />
      <HeroBanners />
      <MainHeading heading={title} paragraph1={para1} paragraph2={para2} />

      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadComponent>
          <AboutUs />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <OurValues />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <KeyFeatures />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Services />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Products />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <ClientServed />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Testimonials />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <ContactUs />
        </LazyLoadComponent>

        <LazyLoadComponent>
          <Gallery />
        </LazyLoadComponent>
      </Suspense>

      <Footer />
      <GoToTop />
    </Fragment>
  );
};

export default App;
