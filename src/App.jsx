import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroBanners from "./components/HeroBanners/HeroBanners";
import MainHeading from "./components/MainHeading/MainHeading";
import AboutUs from "./components/AboutUs/AboutUs";
import OurValues from "./components/OurValues/OurValues";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
<<<<<<< HEAD
import ClientServed from "./components/ClientServed/ClientServed";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  let title = "Quality Printing for Every Need";
  let para1 =
    "Welcome to Sri Pranaya Printers, where your printing dreams come to life. We specialize in high-quality, affordable printing solutions for businesses, individuals, and institutions. Whether you need custom packaging, promotional materials, or stunning marketing collateral, we've got you covered. Our state-of-the-art equipment and experienced team ensure exceptional results every time.";
  let para2 =
    "Explore our range of services and discover how we can help elevate your brand with our printing expertise.";

=======
import Footer from "./components/Footer/Footer";

function App() {
>>>>>>> 90eee29a6a1b6e7413042279bf771422d114ce7d
  return (
    <Fragment>
      <Header />
      <HeroBanners />
<<<<<<< HEAD
      <MainHeading heading={title} paragraph1={para1} paragraph2={para2} />
=======
      <MainHeading />
>>>>>>> 90eee29a6a1b6e7413042279bf771422d114ce7d
      <AboutUs />
      <OurValues />
      <KeyFeatures />
      <Services />
      <Products />
<<<<<<< HEAD
      <ClientServed />
      <Gallery />
=======
>>>>>>> 90eee29a6a1b6e7413042279bf771422d114ce7d
      <Footer />
    </Fragment>
  );
}

export default App;
