import React from "react";

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-2xl mt-16 text-slate-400">
          University of Illinois at Urbana-Champaign: 2017-2020 <br></br>
          Hack Reactor Coding Bootcamp: 2022
        </p>
        <br />
        <p className="text-xl">
          My Name is Jason Novacovici, a recent graduate from the University of Illinois at Urbana-Champaign.
          I originally graduated top of my class with a Bachelor of Science in Sports Management during the middle of the covid pandemic. Finding work was extremely difficult at the time, so I
          used the opportunity to learn and self-teach my new coding skills before taking it a step further and partaking in the Hack Reactor program to refine my current skill set, but also learn
          new ones along the way!
        </p>
      </div>
    </div>
  )
};

export default About