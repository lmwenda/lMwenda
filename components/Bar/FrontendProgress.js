import React from "react";

const ProgressBar = () => {
    return(
        <div className="w-full px-4 lg:w-5/12">
            <h1 className="text-2xl text-gray-800 font-bold p-8">Frontend Developer</h1>
            <div className="mb-8">
                <h1>HTML</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[90%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>CSS</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[85%] rounded-2xl"
                ></div>
                </div>
            </div>
             <div className="mb-8">
                <h1>ReactJS</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[80%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>NextJS</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[80%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>JavaScript</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[95%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>TypeScript</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[90%] rounded-2xl"
                ></div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;