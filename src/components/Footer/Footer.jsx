import React, { Fragment } from "react";
import { booksArray } from "../../../util/data";
import styles from "./Footer.module.css";
import logo from "../../assets/printer-machine.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className={styles.footer_container}>
        {booksArray.map((item) => {
          return (
            <Link to="/" key={item.id} className={styles.book_name}>
              {item.book_name}
            </Link>
          );
        })}

        <p className={styles.about_text}>
          <strong>About Printster.in:</strong> Printster.in is India's first
          online Document Printing Store. We are an online convenience printing
          store dedicated to YOU! Our aim is to give you access to quality
          products (online) printing without wasting any time or energy. It is
          one of a kind website designed while keeping in mind your daily
          printing needs. We offer high quality online printing service at
          affordable prices. At Printster.in, we promise to provide unique,
          affordable and easy online printing solutions. We cater to the online
          printing needs of everyone who has a printing job at hand! You just
          upload your document file, make the payment and you are sorted! We
          will deliver the prints at your doorstep. The simple and easy to
          navigate process will have your order placed in a matter of minutes!
          We are supporting "docx., doc, ppt, pptx, jpg, png, pdf" formats. We
          definitely plan to take the whole basket soon!!!
          <br />
          <br />
          Printster.in provides you with quality online printing solutions like
          - online document printing, online poster printing, online thesis
          printing, online dissertation printing, online posters printing,
          online certificates printing, online brochures printing, online
          catalogue printing, etc. We print anything on paper. We offer various
          binding options such as hard binding, soft binding, spiral binding,
          wiro binding, staple binding, glue binding, etc. It is a web2print
          solution. We Can Help you in Printing. Personal: utility bills,
          letters, CV's, application forms | Creative: self-published books,
          manuscripts & design portfolios | Education: study notes,
          dissertations, assignments & essays | Sales: proposals, tenders,
          presentations & pitch documents | Marketing: brochures, booklets,
          flyers & posters
          <br />
          Let's drop the boring stuff here only and start printing!! Give us a
          try! ;)
        </p>
        <div className={styles.navBranding}>
          <Link to="/">
            <img src={logo} alt="Icon" className={styles.icon} />
          </Link>
          <Link to="/">
            <h3>Sri Pranaya</h3>
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright &#169; 2024</p>
      </div>
    </Fragment>
  );
};

export default Footer;
