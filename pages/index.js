import { motion } from "framer-motion";
import Hero from "../components/Layout/Hero";
import FadeInSection from "../components/FadeInSection";
import About from "../components/Layout/About";

export default function Home() {
  return (
    <motion.section animate={{ x: [ -75, 0 ], opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} transition={{ ease: 'easeIn' }}>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <About />
      </FadeInSection>
    </motion.section>
  )
}
