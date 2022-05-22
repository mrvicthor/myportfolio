import React, { useEffect } from "react";
import Victor from "../assets/images/victor.jpg";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="container">
      <h2 className="clr-white fw-600 fs-200">About Me</h2>
      <div className="about__info">
        <div data-aos="zoom-in">
          <p className="fs-100">
            Hi! My name is Victor and I love anything that is tech related. My
            interest in software development dates back to 2019 when i was
            working as a business developer in an IT company. To better
            understand the product i had to work closely with the software
            developers -- so i started writing HTML & CSS!
          </p>
          <p className="fs-100">
            Presently, I just rounded up my masters degree in Data Analytics
            Engineering, to further enhance my knowledge. I have also worked as
            a freelance developer taking up challenges and providing solutions
            one line of code at a time. My focus these days is building dynamic
            products that provide solutions and improve user experience
          </p>

          <p className="fs-100">
            Here are a few technologies that I've been working with recently:
          </p>
        </div>
        <ul className="skills__list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>SQL</li>
          <li>Node.js</li>
        </ul>
        <div data-aos="fade-down" className="about__image">
          <img src={Victor} alt="Victor Eleanya" className="about__image_img" />
        </div>
      </div>
    </section>
  );
};

export default About;
