import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="App">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="#about" element={<About />} />
          <Route path="#projects" element={<Projects />} />
          <Route path="#contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
