import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer container">
      <h2 className="upper_case fs-200 clr-white">say hi</h2>
      <p className="clr-light-gray">
        <a href="mailto:victoreleanya89@gmail.com">victoreleanya89@gmail.com</a>
      </p>
      <div className="social__icons">
        <a target="_blank" href="https://www.facebook.com/outtaspace1">
          <FaFacebookSquare />
        </a>
        <a target="_blank" href="https://www.instagram.com/mrvic_thor/?hl=en">
          <FaInstagramSquare />
        </a>
        <a target="_blank" href="https://github.com/mrvicthor">
          <FaGithubSquare />
        </a>
        <a target="_blank" href="https://twitter.com/eva_skillz">
          <FaTwitterSquare />
        </a>
      </div>
      <div className="clr-light-gray footer-bottom">© victor eleanya 2022</div>
    </section>
  );
};

export default Footer;
