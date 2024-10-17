import React from "react";
import styles from "./Products.module.css";

import { IoNewspaper } from "react-icons/io5";
import {
  GiNotebook,
  GiCalendar,
  GiNewspaper,
  GiFoldedPaper,
} from "react-icons/gi";
import {
  FaBook,
  FaClipboardList,
  FaRegFileAlt,
  FaShoppingBag,
  FaRegStickyNote,
} from "react-icons/fa";
import { BsImageAlt, BsEnvelopeOpen, BsFolder } from "react-icons/bs";
import { MdEventNote, MdLocalOffer } from "react-icons/md";
import { RiStickyNoteLine, RiPriceTag3Line } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoIosAttach } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import MainHeading from "../MainHeading/MainHeading";

const Products = () => {
  const productList = [
    { id: 1, icon: <FaBook />, title: "Journals" },
    { id: 2, icon: <IoNewspaper />, title: "Magazines" },
    { id: 3, icon: <GiFoldedPaper />, title: "Brochures" },
    { id: 4, icon: <BiCategoryAlt />, title: "Catalogues" },
    { id: 5, icon: <BsImageAlt />, title: "Visual Aids" },
    { id: 6, icon: <GiNewspaper />, title: "Newsletters" },
    { id: 7, icon: <GiNotebook />, title: "Diaries" },
    { id: 8, icon: <AiOutlineSchedule />, title: "Planners" },
    { id: 9, icon: <GiCalendar />, title: "Calendars" },
    { id: 10, icon: <RiStickyNoteLine />, title: "leaflets" },
    { id: 11, icon: <IoIosAttach />, title: "Danglers" },
    { id: 12, icon: <BsEnvelopeOpen />, title: "Invitations" },
    { id: 13, icon: <BsFolder />, title: "Pouch folders" },
    { id: 14, icon: <FaRegFileAlt />, title: "Posters" },
    { id: 15, icon: <FaShoppingBag />, title: "Paper bags" },
    { id: 16, icon: <FaRegStickyNote />, title: "Stickers" },
    { id: 17, icon: <RiPriceTag3Line />, title: "Labels" },
    { id: 18, icon: <FaClipboardList />, title: "Annual Reports" },
    { id: 19, icon: <MdEventNote />, title: "Presentation Folders" },
    { id: 20, icon: <MdLocalOffer />, title: "Self Adhesive Labels" },
  ];

  return (
    <div className={styles.productContainer}>
      <MainHeading heading="Our Products" paragraph1="" paragraph2="" />
      <div className={styles.productsList}>
        {productList.map((item) => {
          return (
            <div key={item.id} className={styles.productItem}>
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
