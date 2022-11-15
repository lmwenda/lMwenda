import { motion } from "framer-motion";
import Hero from "../components/Layout/Hero";
import FadeInSection from "../components/FadeInSection";
import About from "../components/Layout/About";
import ProgressBar from "../components/Bar/FrontendProgress";
import BackendProgressBar from "../components/Bar/BackendProgress";
import Services from "../components/Layout/Services";
import Projects from "../components/Layout/Projects";

export default function Home() {
  return (
    <motion.section animate={{ x: [ -75, 0 ], opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} transition={{ ease: 'easeIn' }}>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <div id="about">
          <h1 className="text-3xl text-gray-800 text-center font-bold mt-32">About us</h1>
          <About />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="skills">
          <h1 className="text-3xl text-gray-800 text-center font-bold mt-32">Skills</h1>
          <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:space-x-24 md:space-y-3">
            <ProgressBar />
            <BackendProgressBar />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="services">
          <h1 className="text-3xl text-gray-800 text-center font-bold mt-32">Services</h1>
          <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:space-x-24 md:space-y-3">
            <Services />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
          <div id="projects">
            <h1 className="text-3xl text-gray-800 text-center font-bold mt-32">Projects</h1>
            <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:space-x-24 md:space-y-3">
              <Projects />
            </div>
          </div>
      </FadeInSection>

    </motion.section>
  )
}
