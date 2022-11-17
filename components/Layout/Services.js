import React from 'react';
import Image from 'next/image';
import image from "../../public/backend.png";
import image2 from "../../public/programmer.png"
import image3 from "../../public/front-end.png";

const Services = () => {
  return (
    <div>
        <div className="flex flex-wrap space-y-3 mx-auto md:flex-nowrap p-12">

            <a href="">
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 p-8 md:p-0 ease-in-out delay-150 transform bg-white shadow-md md:shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image alt="" className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" height={0} width={0} src={image} />
                <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Backend Development</span>
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                        We can provide Backend Services for your Application
                    </p>
                </div>
                </div>
            </div>
            </a>

             <a href="">
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white p-8 md:p-0  shadow-md md:shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image alt="" className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image2} height={0} width={0} />
                <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Full Stack Development</span>
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                        We can develop a Full-Stack Website from scratch for you.
                    </p>
                </div>
                </div>
            </div>
            </a>

            <a href="">
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 p-8 md:p-0 transform bg-white shadow-md md:shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image alt="" className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image3} height={0} width={0} />
                <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Frontend Development</span>
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                        We can provide Frontend Services for your Application
                    </p>
                </div>
                </div>
            </div>
            </a>

        </div>
    </div>
  );
}

export default Services;