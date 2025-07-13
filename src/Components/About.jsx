import React from "react";

const About = () => {
  return (
    <section name='About' className="max-w-screen-2xl container mx-auto px-4 md:px-15 my-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">About Me</h1>

      <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
        {/* Intro */}
        <div>
          <p>
            Hello, I'm <span className="font-semibold text-green-600">Tushar</span>, a passionate Web Developer with a keen eye for Full Stack Development. 
            With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
          </p>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-2">🎓 Education & Training</h2>
          <p>
            I have a background in <span className="font-medium">Information Technology</span> with focused training in 
            Web Development and UI/UX Design. Through both academic study and hands-on practice, 
            I've built strong skills in <span className="font-medium">HTML, CSS, JavaScript, React</span>, and modern development tools.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-2">🛠️ Skills & Expertise</h2>
          <p>
            I am skilled in <span className="font-medium">HTML, CSS, JavaScript, React</span>, and responsive web design. 
            Experienced in creating clean, user-friendly interfaces with strong attention to detail. 
            Familiar with <span className="font-medium">Git, Tailwind CSS, API integration</span>, and modern development workflows.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold text-green-500 mb-2">🚀 Mission Statement</h2>
          <p>
            My mission is to leverage my skills and creativity to deliver innovative IT solutions that exceed client expectations 
            and contribute positively to the digital landscape. I am committed to continuous learning and growth, 
            always seeking new challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


// <div className="max-w-screen-2xl container mx-auto px-4 md:px-15 my-20"></div>