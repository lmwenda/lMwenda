import React from "react";

const BackendProgressBar = () => {
    return(
        <div className="w-full px-4 lg:w-5/12">
            <h1 className="text-2xl text-gray-800 font-bold p-8">Backend Developer</h1>
            <div className="mb-8">
                <h1>NodeJS</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[90%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>ExpressJS</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[85%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>MongoDB</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[90%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>MySQL</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[70%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>PrismaORM</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[80%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <h1>MongooseORM</h1>
                <div className="bg-gray-400 relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-blue-500 absolute top-0 left-0 h-full w-[85%] rounded-2xl"
                ></div>
                </div>
            </div>
        </div>
    );
}

export default BackendProgressBar;