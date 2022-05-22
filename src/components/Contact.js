import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./contact.css";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="title clr-light-gray upper_case fs-200">
        Need a developer ?
      </div>
      <Link
        to="form"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="contact flex fs-700 clr-white"
      >
        <div> Let's team up </div> <BsArrowRight />
      </Link>
    </section>
  );
};

export default Contact;
