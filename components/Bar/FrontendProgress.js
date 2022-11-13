import React from "react";

const ProgressBar = () => {
    return(
        <div className="w-full px-4 lg:w-5/12">
            <div className="mb-8">
                <div className="bg-light relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-primary absolute top-0 left-0 h-full w-1/2 rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <div className="bg-light relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-primary absolute top-0 left-0 h-full w-[75%] rounded-2xl"
                ></div>
                </div>
            </div>
            <div className="mb-8">
                <div className="bg-light relative h-[10px] w-full rounded-2xl">
                <div
                    className="bg-primary absolute top-0 left-0 h-full w-[90%] rounded-2xl"
                ></div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;