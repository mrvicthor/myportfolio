import React, { useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

const ProjectList = ({ project }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className={`project__item`}
    >
      <img
        src={project.imgUrl}
        alt={project.imageUrl}
        className="project__image"
      />
      <div className="project__body">
        <h3 className="clr-white fs-500">{project.title}</h3>
        <p className="clr-light-gray fs-200">{project.description}</p>
        <div className="project__links flex">
          <a
            target="_blank"
            href={project.github}
            className="btn__project_links clr-white"
          >
            <FiGithub />
          </a>
          <a
            target="_blank"
            href={project.website}
            className="btn__project_links clr-white"
          >
            <RiExternalLinkLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
