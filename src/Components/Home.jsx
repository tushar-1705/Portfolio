import React from "react";
import pic from "../../public/photo.jpg";

import { FaSquareFacebook, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiLinkedin, SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section name='Home' className="max-w-screen-2xl container mx-auto px-4 md:px-15 my-20 ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Profile Image */}
        <div className="order-1 md:order-2">
          <img
            src={pic}
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-5 order-2 md:order-1">
          <span className="text-lg text-gray-600">Welcome to my feed</span>

          <div className="flex flex-wrap items-center text-2xl md:text-3xl font-medium">
            <h1 className="mr-2">Hello, I'm a</h1>
            <ReactTyped
              className="text-red-600 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            A Web Developer & Designer passionate about crafting beautiful, responsive websites that solve real-world problems. I specialize in HTML, CSS, JavaScript, React, and UI/UX design — bringing ideas to life with clean code and creative design. This portfolio is a reflection of my growth, curiosity, and the joy I find in building for the web.
          </p>

          {/* Socials and Tech Stack */}
          <div className="flex flex-col md:flex-row justify-between gap-6 pt-4">
            {/* Social Media */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Available On</h2>
              <div className="flex items-center gap-4 text-xl text-gray-700">
                <a href="https://www.facebook.com/share/176v4rUwCm/" target="_blank" rel="noreferrer">
                  <FaSquareFacebook className="hover:text-blue-600 transition" />
                </a>
                <a href="https://linkedin.com/in/tushar-nikam-8b4266240" target="_blank" rel="noreferrer">
                  <SiLinkedin className="hover:text-blue-500 transition" />
                </a>
                <a href="https://t.me/tusharnikam_17" target="_blank" rel="noreferrer">
                  <FaTelegram className="hover:text-sky-500 transition" />
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Currently Working On</h2>
              <div className="flex items-center gap-4 text-2xl text-gray-700">
                <SiMongodb className="hover:text-green-600 hover:scale-110 transition" />
                <SiExpress className="hover:text-black hover:scale-110 transition" />
                <FaReact className="hover:text-blue-500 hover:scale-110 transition" />
                <FaNodeJs className="hover:text-green-500 hover:scale-110 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-12 border-gray-300" />
    </section>
  );
};

export default Home;


//<div className="max-w-screen-2xl container mx-auto px-4 md:px-15 my-20">