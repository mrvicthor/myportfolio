import React from "react";
import About from "./About";
import Content from "./Content";
import Projects from "./Projects";
import Contact from "./Contact";
import Form from "./Form";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
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
