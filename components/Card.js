import React from "react";
import Image from "next/image";
import image from "../public/projects.jpg"

const Card = ({ project }) => {
    return(
        <a href={project.link}>
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto border border-gray-400">
            <div className="w-full block h-full">
                <Image alt="" src={image} height={0} width={0} className="max-h-40 w-full object-cover"/>
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">
                       {project.type} 
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                       {project.name} 
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
        </a>
    )
}

export default Card;