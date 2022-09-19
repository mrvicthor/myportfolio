import React from "react";
import About from "./About";
import Content from "./Content";
import Projects from "./Projects";
import Contact from "./Contact";
import Form from "./Form";

const Home = () => {
  return (
    <section className="container">
      <Content />

      <About />

      <Projects />

      <Contact />
      <Form />
    </section>
  );
};

export default Home;
