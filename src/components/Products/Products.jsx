import React from "react";
import styles from "./Products.module.css";

import {
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
import { GiNotebook } from "react-icons/gi";
import { BsImageFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";
import { RiAttachmentFill } from "react-icons/ri";
import { IoNewspaper } from "react-icons/io5";
import MainHeading from "../MainHeading/MainHeading";

const Products = () => {
  const productList = [
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
