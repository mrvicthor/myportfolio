import React, { useState, useEffect } from "react";
import "./content.css";
import { Link } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="landing__page container" id="hero">
      <div data-aos="fade-up">
        <h1 data-aos="zoom-in" className="clr-green fs-100 letter-spacing-2">
          {" "}
          Hi, my name is{" "}
          <span className="dev__name fs-600 clr-white">Victor Eleanya.</span>
        </h1>

        <p className="clr-light-gray fs-600 mt-1 web">
          I build things for the web.
        </p>
        <p className="clr-light-gray mt-1 fs-100 description">
          I am a software developer specialized in building exceptional digital
          experience. I believe i can change the world one code at a time
        </p>
        <button className="contact__btn mt-2">
          <Link to="projects">View my Projects</Link>
        </button>
      </div>
    </section>
  );
};

export default Content;
