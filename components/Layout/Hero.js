import Link from "next/link";
import Image from "next/image";
import image from "../../public/image.jpg"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
    return(
        <div
        className='container flex flex-col-reverse items-center px-6 mx-auto mt-1 space-y-32 md:space-y-0 md:mt-20 md:flex-row'
      >
          <div className='flex flex-col mb-32 space-y-6 md:w-1/2'>
            <h1
                className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`Hi! I'm Maetyu`)
                    .pauseFor(2000)
                    .start();
                }}
              />
            </h1>

            <h2 className="text-xl text-center text-gray-600 md:text-left">Full-Stack Website Developer</h2>

            <div> 
              <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. 
              </p>
            </div>    

            <div className='flex flex-row space-x-1 justify-center md:justify-start'>
                <motion.div
                animate={{ y: [ 0, -10, 0 ], opacity: 1 }}
                transition={{
                  delay: 1,
                  ease: 'easeInOut',
                  y: { type: 'bounce', stiffness: 15 },
                  default: { duration: 2 },
                }}
                className='mt-5 space-x-5'>
                  <a href="#projects"> 
                    <button className='bg-blue-700 text-white rounded px-6 p-3 hover:opacity-75'>Projects</button>
                  </a>

                  <Link href='/contact'>
                      <a className="text-blue-700">Talk to us</a>
                  </Link>
                </motion.div>
            </div>
          </div>

          <motion.div 
            className='md:w-1/2'
            animate={{ opacity: 1, y: [ 0, -50]}}
            transition={
              {
                delay: 1,
                y: { type: 'bounce', stiffness: 15 },
                default: { duration: 3, repeatType: 'loop', repeat: Infinity },
              }}
            >
              <Image className='absolute z-50 sm:w-auto md:w-9/12' height={0} width={0} src={image} alt='' />
          </motion.div>
      </div>
    );
}

export default Hero;