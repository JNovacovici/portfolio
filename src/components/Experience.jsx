import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascriptImg from "../assets/javascript.png";
import node from "../assets/node.png";
import reactImg from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import aws from "../assets/aws.png";
import typescript from "../assets/typescript.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import postgres from "../assets/postgres.png";

const Experience = () => {

  const techStack = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascriptImg,
      title: 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImg,
      title: 'React',
      style: 'shadow-blue-500'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500'
    },
    {
      id: 6,
      src: node,
      title: 'Node',
      style: 'shadow-green-500'
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 8,
      src: aws,
      title: 'AWS',
      style: 'shadow-yellow-700'
    },
    {
      id: 9,
      src: typescript,
      title: 'Typescript',
      style: 'shadow-blue-500'
    },
    {
      id: 10,
      src: mongodb,
      title: 'MongoDB',
      style: 'shadow-green-400'
    },
    {
      id: 11,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-purple-400'
    },
    {
      id: 12,
      src: postgres,
      title: 'Postgres',
      style: 'shadow-cyan-400'
    },
  ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">Tech Stack I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {techStack.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience;