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
import Footer from "./components/Footer/Footer";
//d

function App() {
  return (
    <Fragment>
      <Header />
      <HeroBanners />
      <MainHeading />
      <AboutUs />
      <OurValues />
      <KeyFeatures />
      <Services />
      <Products />
      <Footer />
    </Fragment>
  );
}

export default App;
