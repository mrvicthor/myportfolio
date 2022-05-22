import React, { useState, useEffect } from "react";
import data from "../data";
import ProjectList from "./ProjectList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./projects.css";
import { useAnimation } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([] || null);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    setProjects(data);
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 5,
          bounce: 0.3,
          delay: 0.5,
          when: "beforeChildren",
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);
  return (
    <section id="projects" ref={ref} className="container">
      <h2 className="clr-white fw-600 fs-200">Projects</h2>
      <motion.div className={`projects__list grid`} animate={animation}>
        {projects.map((project) => (
          <ProjectList key={project.id} project={project} />
        ))}
      </motion.div>
      <div className="projects__more">
        <button className="view__more">View more projects</button>
      </div>
    </section>
  );
};

export default Projects;
