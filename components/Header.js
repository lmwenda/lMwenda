import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header  = () => {

    const [ active, setActive ] = useState(false);
  
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
        <nav className='flex items-center flex-wrap p-3 mx-auto '>
            <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
                <span className='text-2xl text-blace tracking-wide'>
                Maetyu
                </span>
            </a>
            </Link>
            <button
            className=' inline-flex p-5 rounded lg:hidden text-black ml-auto hover:text-black outline-none'
            onClick={handleClick}
            >
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <motion.div
            className={`${
                active ? 'shadow-xl' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <Link href='/'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-700'>
                        Home
                    </a>
                </Link>

                <a href="#skills" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-700'>
                    Skills
                </a>

                <a href="#projects" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-700'>
                    Projects
                </a>

                <a href="#services" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-700'>
                    Services
                </a>

                <Link href='/contact'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-700'>
                        Contact
                    </a>
                </Link>
            </div>
            </motion.div>
        </nav>
        </>
    );
};

export default Header;