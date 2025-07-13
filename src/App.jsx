import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 via-white to-green-100 min-h-screen">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
