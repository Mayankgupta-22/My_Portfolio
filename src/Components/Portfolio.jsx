import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
        },
        {
            id: 2,
            src: image2,
        },
        {
            id: 3,
            src: navbar,
        },
        {
            id: 4,
            src: image3,
        },
        {
            id: 5,
            src: installNode,
        },

    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;