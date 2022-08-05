import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" my-auto w-full height:50vh bg-gradient-to-b from-gray-800 to-black text-white  sm:text-left"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, Anmol this side 
          I'm currently doing B.Tech from ADGITM, GGSIP University,Delhi. 
          Done my Schooling from U.P (Moradabad),
          12th From SSCA,Moradabad,
          10th From SSCA,Moradabad.
          Known Technologies - HTML,CSS,React,JavaScript.
          2* On CodeChef,
          2* On HackerRank.
        </p>

        <br />

      
      </div>
    </div>
  );
};

export default About;
