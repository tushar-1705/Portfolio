import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker",
    tech: "React JS, CSS, JavaScript",
    desc: "A responsive and interactive web app built with React to manage personal finances. Users can add, delete, and track income and expenses.",
    link: "https://github.com/tushar-1705/Expense-Tracker",
  },
  {
    title: "WorldVerse",
    tech: "React JS, CSS",
    desc: "A React-based web app that displays basic information about countries such as population, flag, capital, region, and more.",
    link: "https://github.com/tushar-1705/CountryInfo",
  },
  {
    title: "Weather App",
    tech: "HTML, CSS, JavaScript",
    desc: "A clean and responsive web application built with HTML, CSS, and JavaScript to display real-time weather information for any city.",
    link: "https://github.com/tushar-1705/JS_Projects/tree/master/Wheather%20App",
  },
  // {
  //   title: "Youtube Clone",
  //   tech: "HTML, CSS, JavaScript",
  //   desc: "A front-end clone of the YouTube homepage built with HTML, CSS, and JavaScript. Features a responsive layout with video thumbnails, navigation bar, sidebar, and interactive hover effects, mimicking the original YouTube UI.",
  //   link: "#",
  // },
];

const Projects = () => {
  return (
    <section name='Project' className="max-w-screen-2xl container mx-auto px-4 md:px-15" id="projects">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-center mb-3">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-gray-600 mb-2">
                <span className="text-gray-800 font-semibold">Tech Stack:</span>{" "}
                {project.tech}
              </p>
              <p className="text-sm text-gray-700">{project.desc}</p>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-colors duration-300"
              >
                <FaGithub />
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
