import React from "react";
import Atelier from "../assets/Atelier.gif";
import Encompass from "../assets/Encompass.gif";
import snake from "../assets/snake.gif";
import sdc from "../assets/sdc.png";

const projects = [
  {
    id: 1,
    src: snake,
    text: 'Recreation of the hit, classic retro game: Snake. Main goal of learning more about typescript and keeping track of live movement with user interaction.',
    href: 'https://github.com/JNovacovici/snake',
    title: 'A Game of Snake!',
  },
  {
    id: 2,
    src: Encompass,
    text: 'MVP full stack application with a group of engineers where the user has the ability to create, track and connect tasks with a calendar to display however they want. An abunduance of customization at the user disposal, as well as detail metrics to track.',
    href: 'https://github.com/JNovacovici/rpp36-boc-sailboat',
    title: 'Project Encompass: Taking a Calendar One Step Further',
  },
  {
    id: 3,
    src: sdc,
    text: 'A project working on replacing an old serviced API with a newer one that has a larger collection of items and optimizing it through multiple EC2 servers, load balancing and checking the breakdown in loader.io.',
    href: 'https://github.com/JNovacovici/sdc-services',
    title: 'SDC: Backend Optimization and Traffic Handling',
  },
  {
    id: 4,
    src: Atelier,
    text: 'A revamped, sleek retail portal created with an existing API catalogue of products to demonstrate for interested companies how their websites could be redefined.',
    href: 'https://github.com/JNovacovici/FEC',
    title: 'Project Atelier: An Ecommerce Redesign',
  },
];

//need projName in object, as well as update text with a blurb on what the project is about. possibly another variable for tech stack to add at the bottom of the project?
//updated images as well!
const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6 lg:text-lg">Check out some of my most recent work here</p>
        </div>
        <div>
          <ul className="group/list">
            {projects.map(({id, src, text, href, title}) => (
              <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg: -inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-2xl"
                       href={href}
                       target="_blank"
                       rel="noreferrer">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{title}</span>
                    </a>
                  </h3>
                  <p className="mt-4 text-sm leading-normal lg:text-lg">{text}</p>
                </div>
                <img loading="lazy"
                     className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                     src={src}
                     alt=""/>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
    //   <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
    //     <div className="pb-8">
    //       <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
    //       <p className="py-6">Check out some of my most recent work here</p>
    //     </div>
    //     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

    //       {projects.map(({id, src, text, href}) => (
    //         <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col">
    //           <img
    //             src={src}
    //             alt=""
    //             className="rounded-md duration-200 hover:scale-105"/>
    //           <div className="flex items-center justify-center">
    //             <a href={href}
    //               target="_blank"
    //               rel="noreferrer"
    //               className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
    //               Repository
    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Portfolio;