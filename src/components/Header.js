import React, { useState } from "react";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Overlay from "./Overlay";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const toggleNav = () => {
    setClicked(!clicked);
  };

  const [color, setColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 72) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <nav className={color ? "nav nav-bg" : "nav"}>
      <motion.div
        className="flex"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <button
          onClick={toggleNav}
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
        >
          <span className="sr-only" aria-expanded="false">
            Menu
          </span>
          {clicked ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="nav__logo">
          mrvicthor
        </Link>
        {clicked ? <Overlay /> : null}
        <ul
          className={
            clicked
              ? "primary-navigation active flex"
              : "primary-navigation flex"
          }
          id="primary-navigation"
          data-visible={clicked ? "true" : "false"}
        >
          <li onClick={toggleNav}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggleNav}
            >
              Home
            </Link>
          </li>
          <li onClick={toggleNav}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={toggleNav}
            >
              About
            </Link>
          </li>
          <li onClick={toggleNav}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={toggleNav}
            >
              Project
            </Link>
          </li>
          <li onClick={toggleNav}>
            <Link
              to="form"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Header;
