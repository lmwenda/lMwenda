import Image from "next/image";
import image from "../../public/image.jpg"

const About = () => {
    return(
        <div className="flex flex-col space-y-8 mt-8 items-center justify-center md:mt-44">
            <h1 className="text-4xl">About Me</h1>
            <div className="flex flex-row mb-32 space-y-6 md:w-96">
                <div>
                    <Image className='absolute z-50 sm:w-auto md:w-4/12' height={0} width={0} src={image} alt='' />
                </div>

                <div className="flex flex-col space-y-4">
                    <div>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </h1>
                    </div>

                    <div>
                        <div>

                        </div>

                        <div>

                        </div>

                        <div>

                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;