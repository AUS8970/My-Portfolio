import React from 'react';
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Educations from "./components/Educations";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Educations />
      <Contact />
    </main>
  );
}

export default App;
