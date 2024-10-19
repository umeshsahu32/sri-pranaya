// REACT ICONS
import {
  FaInfoCircle,
  FaIndustry,
  FaRandom,
  FaLeaf,
  FaBook,
  FaNewspaper,
  FaCalendarAlt,
  FaStickyNote,
  FaShoppingBag,
  FaFolder,
  FaFileAlt,
  FaTag,
  FaClipboardList,
  FaEnvelope,
  FaListAlt,
  FaBookOpen,
  FaFolderOpen,
  FaRegNewspaper,
} from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import {
  RiAttachmentFill,
  RiComputerFill,
  RiTimerFlashFill,
} from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { BsImageFill } from "react-icons/bs";
import { AiFillSchedule, AiFillHome } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";
import { IoNewspaper } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";

// BANNER IMAGES
import banner1 from "../assets/banners/banner1.avif";
import banner2 from "../assets/banners/banner2.avif";
import banner3 from "../assets/banners/banner3.avif";

// OUR VALUES IMAGES
import quality from "../assets/values/quality.png";
import innovation from "../assets/values/innovation.png";
import customerSatisfaction from "../assets/values/customer-satisfaction.png";
import sustainability from "../assets/values/sustainability.png";

// OUR SERVICES IMAGES
import service1 from "../assets/printer.png";
import service2 from "../assets/digital-printing.png";
import service3 from "../assets/packaging.png";
import service4 from "../assets/print.png";
import service5 from "../assets/promotion.png";
import service6 from "../assets/branding.png";

// CLIENT SECTION IMAGES
import client1 from "../assets/client-image/img1.jpg";
import client2 from "../assets/client-image/img2.jpg";
import client3 from "../assets/client-image/img3.jpg";
import client4 from "../assets/client-image/img4.jpg";
import client5 from "../assets/client-image/img5.jpg";
import client6 from "../assets/client-image/img6.jpg";
import client7 from "../assets/client-image/img7.jpg";
import client8 from "../assets/client-image/img8.jpg";
import client9 from "../assets/client-image/img9.jpg";
import client10 from "../assets/client-image/img10.jpg";
import client11 from "../assets/client-image/img11.jpg";
import client12 from "../assets/client-image/img12.jpg";
import client13 from "../assets/client-image/img13.jpg";
import client14 from "../assets/client-image/img14.jpg";
import client15 from "../assets/client-image/img15.jpg";

// TESTIMONIALS IMAGES
import avatar1 from "../assets/testimonials/avatar1.png";
import avatar2 from "../assets/testimonials/avatar2.png";
import avatar3 from "../assets/testimonials/avatar3.png";
import avatar4 from "../assets/testimonials/avatar4.png";
import avatar5 from "../assets/testimonials/avatar5.png";
import avatar6 from "../assets/testimonials/avatar6.png";

// CONTACT US SECTION IMAGES
import address from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone-call.png";

// GALLERY IMAGES
import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";
import product5 from "../assets/products/product5.jpg";
import product6 from "../assets/products/product6.jpg";
import product7 from "../assets/products/product7.jpg";
import product8 from "../assets/products/product8.jpg";
import product9 from "../assets/products/product9.jpg";
import product10 from "../assets/products/product10.jpg";

// HEADER LIST
export const NavigationLinks = [
  {
    id: 1,
    path: "#",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    path: "#about-us",
    text: "About Us",
    icon: <FaInfoCircle />,
  },
  {
    id: 3,
    path: "#services",
    text: "Services",
    icon: <FaHandshake />,
  },
  {
    id: 4,
    path: "#clients",
    text: "Clients",
    icon: <FiPackage />,
  },
  {
    id: 5,
    path: "#contact",
    text: "Contact",
    icon: <FaIndustry />,
  },
];

// BANNER LIST
export const slides = [
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

// OUR VALUES LIST
export let values = [
  { id: 1, icon: quality, title: "Quality" },
  { id: 2, icon: innovation, title: "Innovation" },
  {
    id: 3,
    icon: customerSatisfaction,
    title: "Customer Satisfaction",
  },
  { id: 4, icon: sustainability, title: "Sustainability" },
];

// KEY FEATURES LIST
export const keyFeaturesList = [
  {
    id: 1,
    title: "Diverse Solutions",
    description:
      "From business cards to packaging, we offer a wide range of printing services.",
    icon: <FaRandom />,
  },
  {
    id: 2,
    title: "Sustainable Practices",
    description:
      "Eco-friendly printing solutions to reduce environmental impact.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Advanced Technology",
    description: "Cutting-edge printing equipment for superior quality.",
    icon: <RiComputerFill />,
  },
  {
    id: 4,
    title: "Reliable Service",
    description: "On-time delivery, every time, guaranteed.",
    icon: <RiTimerFlashFill />,
  },
];

// OUR SERVICES LIST
export const serviceList = [
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

// PRODUCT LIST
export const productList = [
  { id: 1, icon: <FaBook />, title: "Journals" },
  { id: 2, icon: <IoNewspaper />, title: "Magazines" },
  { id: 3, icon: <FaBookOpen />, title: "Brochures" },
  { id: 4, icon: <FaListAlt />, title: "Catalogues" },
  { id: 5, icon: <BsImageFill />, title: "Visual Aids" },
  { id: 6, icon: <FaNewspaper />, title: "Newsletters" },
  { id: 7, icon: <GiNotebook />, title: "Diaries" },
  { id: 8, icon: <AiFillSchedule />, title: "Planners" },
  { id: 9, icon: <FaCalendarAlt />, title: "Calendars" },
  { id: 10, icon: <FaRegNewspaper />, title: "leaflets" },
  { id: 11, icon: <RiAttachmentFill />, title: "Danglers" },
  { id: 12, icon: <FaEnvelope />, title: "Invitations" },
  { id: 13, icon: <FaFolder />, title: "Pouch folders" },
  { id: 14, icon: <FaFileAlt />, title: "Posters" },
  { id: 15, icon: <FaShoppingBag />, title: "Paper bags" },
  { id: 16, icon: <FaStickyNote />, title: "Stickers" },
  { id: 17, icon: <FaTag />, title: "Labels" },
  { id: 18, icon: <FaClipboardList />, title: "Annual Reports" },
  { id: 19, icon: <FaFolderOpen />, title: "Presentation Folders" },
  { id: 20, icon: <ImPriceTag />, title: "Self Adhesive Labels" },
];

// CLIENTS LIST
export const clientsList = [
  { id: 1, image: client1 },
  { id: 2, image: client2 },
  { id: 3, image: client3 },
  { id: 4, image: client4 },
  { id: 5, image: client5 },
  { id: 6, image: client6 },
  { id: 7, image: client7 },
  { id: 8, image: client8 },
  { id: 9, image: client9 },
  { id: 10, image: client10 },
  { id: 11, image: client11 },
  { id: 12, image: client12 },
  { id: 13, image: client13 },
  { id: 14, image: client14 },
  { id: 15, image: client15 },
];

// TESTIMONIALS LIST
export const testimonials = [
  {
    id: 1,
    avatar: avatar1,
    name: "Vikram Gupta",
    position: "Event Manager",
    testimonial:
      "Working with this printing press has been a game-changer for our company. Their attention to detail and quality in banner printing, books, and corporate stationery is unparalleled. Highly recommend for all your printing needs.",
    title: "Highly recommended",
    date: "25 May, 2024",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Rohit Verma",
    position: "Marketing Head",
    testimonial:
      "Their services are top-notch! From banners to brochures, every print job we’ve received has been impeccable. The team is professional, friendly, and always delivers on time. Couldn't ask for a better partner for our printing needs.",
    title: "Top notch services",
    date: "15 June, 2024",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Anjali Sharma",
    position: "Creative Director",
    testimonial:
      "Absolutely impressed with the quality and speed of their printing services. They've handled our corporate stationery and book printing projects with ease and excellence. Their customer service is exceptional too.",
    title: "Impressed with the quality  ",
    date: "20 July, 2024",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Suresh Patil",
    position: "Event Coordinator",
    testimonial:
      "This printing press has exceeded our expectations time and again. Their expertise in banner printing and corporate stationery has been invaluable for our events. Truly a reliable and high-quality service provider.",
    title: "Reliable and high-quality",
    date: "28 July, 2024",
  },
  {
    id: 5,
    avatar: avatar5,
    name: "Priya Singh",
    position: "Operations Manager",
    testimonial:
      "Their printing solutions have been crucial for our branding efforts. From banners to books, the quality and consistency they offer are fantastic. The team is highly professional and responsive. Couldn't be happier with their services.",
    title: "Highly professional team",
    date: "2 August, 2024",
  },
  {
    id: 6,
    avatar: avatar6,
    name: "Praveen Rao",
    position: "Product Manager",
    testimonial:
      "Our go-to printing press for all our corporate needs. They’ve never failed to deliver high-quality prints, whether it’s for corporate stationery or promotional banners. Their service is quick, efficient, and always up to our standards.",
    title: "Our go-to printing press",
    date: "21 August, 2024",
  },
];

// CONTACT US INFO CARD
export const infoCardData = [
  {
    id: 1,
    image: address,
    heading: "Address",
    title:
      "H.No: 11-4-685/8/9, Beside Maruthi Garden,Red Hills, Lakdikapool, Hyderabad",
    style: "addressCard",
  },
  {
    id: 2,
    image: mail,
    heading: "Email Address ",
    title: "sripranayaprinters@gmail.com",
    style: "emailCard",
  },
  {
    id: 3,
    image: phone,
    heading: "Phone",
    title: "+91 94944-98960",
    style: "phoneCard",
  },
];

// GALLERY IMAGES LIST
export const galleryImages = [
  { id: 1, productImage: product1, productName: "Product 1" },
  { id: 2, productImage: product2, productName: "Product 2" },
  { id: 3, productImage: product3, productName: "Product 3" },
  { id: 4, productImage: product4, productName: "Product 4" },
  { id: 5, productImage: product5, productName: "Product 5" },
  { id: 6, productImage: product6, productName: "Product 6" },
  { id: 7, productImage: product7, productName: "Product 7" },
  { id: 8, productImage: product8, productName: "Product 8" },
  { id: 9, productImage: product9, productName: "Product 9" },
  { id: 10, productImage: product10, productName: "Product 10" },
];
