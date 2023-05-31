import React from "react";
import Atelier from "../assets/Atelier.gif";
import Encompass from "../assets/Encompass.gif";
import snake from "../assets/snake.gif";
import Github from "../assets/github.png";

const projects = [
  {
    id: 1,
    src: snake,
    text: '',
    href: 'https://github.com/JNovacovici/snake',
  },
  {
    id: 2,
    src: Encompass,
    text: '',
    href: 'https://github.com/JNovacovici/rpp36-boc-sailboat',
  },
  {
    id: 3,
    src: Github,
    text: '',
    href: 'https://github.com/JNovacovici/sdc-services',
  },
  {
    id: 4,
    src: Atelier,
    text: '',
    href: 'https://github.com/JNovacovici/FEC',
  },
];

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my most recent work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {projects.map(({id, src, text, href}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                <a href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;