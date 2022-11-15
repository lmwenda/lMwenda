import { motion } from "framer-motion";
import Hero from "../components/Layout/Hero";
import FadeInSection from "../components/FadeInSection";
import About from "../components/Layout/About";
import ProgressBar from "../components/Bar/FrontendProgress";
import BackendProgressBar from "../components/Bar/BackendProgress";
import Services from "../components/Layout/Services";

export default function Home() {
  return (
    <motion.section animate={{ x: [ -75, 0 ], opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} transition={{ ease: 'easeIn' }}>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-3xl text-gray-800 text-center font-bold mt-32">About us</h1>
        <About />
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-3xl text-gray-800 text-center font-bold mt-32">Skills</h1>
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:space-x-24 md:space-y-3">
          <ProgressBar />
          <BackendProgressBar />
        </div>
      </FadeInSection>

      <FadeInSection>
          <h1 className="text-3xl text-gray-800 text-center font-bold mt-32">Services</h1>
          <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:space-x-24 md:space-y-3">
            <Services />
          </div>
      </FadeInSection>

      <FadeInSection>
      
      </FadeInSection>

    </motion.section>
  )
}
