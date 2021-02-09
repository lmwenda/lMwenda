import React from "react";

import './App.css';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">

          <header>
            <Header />
          </header>

          <section id="upper-part">
            <Main />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="contact-us">
            <Contact />
          </section>

          <footer>
            <Footer />
          </footer>

    </div>
  );
}

export default App;
