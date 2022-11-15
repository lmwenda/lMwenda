import Image from "next/image";
import image from "../../public/about.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const About = () => {
    return(
        <div
        className='container flex flex-col items-center px-6 mx-auto mt-1 space-y-40 md:space-y-0 md:mt-20 md:space-x-40 md:flex-row'
      >
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

            <div className="flex flex-col w-96 h-96 space-y-12">
                <h1 className="text-center text-lg text-gray-600 font-semibold">
                I&apos;m a young, passionate software engineer. I like watching anime, playing games and exploring new things. 
                </h1>
                <div className="flex flex-row space-x-4 justify-center items-center h-24 shadow-lg ">
                    <div>
                        <h1 className="text-xl font-bold text-center text-gray-800">2+</h1>
                        <h2 className="text-lg text-gray-600">Years Experience</h2>
                    </div>

                    <div>
                            <h1 className="text-xl font-bold text-center text-gray-800">20+</h1>
                            <h2 className="text-lg text-gray-600">Projects</h2>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-center text-gray-800">5+</h1>
                        <h2 className="text-lg text-gray-600">Satisfied Clients</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
            // <div className="flex flex-col space-y-8">
            //     <div className="flex flex-row text-xl font-bold space-x-12 text-center w-96">
            //         <div>
            //             <Image className='absolute z-50 sm:w-auto md:w-9/12' height={0} width={0} src={image} alt='' />
            //         </div>

            //         <h1 className="text-center text-lg text-gray-600 font-semibold">
            //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            //             labore et dolore magna aliqua. Ut enim ad minim veniam, 
            //             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            //         </h1>
            //     </div>

            //     <div className="flex flex-row space-x-8 justify-center items-center ">
            //         <div>
            //             <h1 className="text-xl font-bold text-center">2+</h1>
            //             <h2 className="text-lg text-gray-600">Years Experience</h2>
            //         </div>

            //         <div>
            //             <h1 className="text-xl font-bold text-center">20+</h1>
            //             <h2 className="text-lg text-gray-600">Projects</h2>
            //         </div>

            //         <div>
            //             <h1 className="text-xl font-bold text-center">4+</h1>
            //             <h2 className="text-lg text-gray-600">Satisfied Clients</h2>
            //         </div>
            //     </div>
            // </div>