import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl mt-20">
                    I’m a determined developer who values teamwork, proficient in frontend development, and possesses a solid understanding of
                    data structures and algorithms in C++ currently undergraduate from SSIPMT Raipur, where I acquired a solid foundation insoftware development principles and horned my programming skills.

                </p>

                <br />


            </div>
        </div>
    );
};

export default About;