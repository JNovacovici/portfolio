import React from "react";
import jasonPFP from "../assets/jasonPFP.png";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a Software Engineer</h2>
          <p className="text-gray-500 py-4 max-w-md text-xl">
            I recently accumulated 1 year of experience developing
            and structuring software as a Full Stack Developer. Currently,
            I am most interested in AI and web applications, with most of
            my tech revolving around React, Javascript, Typescript, AWS, and
            both SQL/noSQL
          </p>
        </div>
        <div>
          <img src={jasonPFP} alt="my profile pic" className= "rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  )
}

export default Home;