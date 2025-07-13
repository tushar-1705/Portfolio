import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMongodb,
  SiOracle,
  SiSpring,
  SiSqlite,
  SiVercel,
  SiVite,
  SiXampp,
  SiPython,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";



const SkillBar = ({ icon: Icon, name, percent }) => (
  <div className="mb-4">
    <div className="flex items-center space-x-3 mb-1">
      <Icon className="text-xl text-green-500" />
      <span className="font-medium text-gray-800">{name}</span>
      <span className="ml-auto text-sm text-gray-600">{percent}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section name='Skills' className="max-w-screen-2xl container mx-auto px-4 md:px-15 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">🧠 Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Frontend</h3>
          <SkillBar icon={FaHtml5} name="HTML5" percent={90} />
          <SkillBar icon={FaCss3Alt} name="CSS3" percent={85} />
          <SkillBar icon={FaJs} name="JavaScript" percent={80} />
          <SkillBar icon={FaReact} name="React.js" percent={75} />
          <SkillBar icon={SiTailwindcss} name="Tailwind CSS" percent={70} />
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Backend</h3>
          <SkillBar icon={FaJava} name="Java" percent={75} />
          {/* <SkillBar icon={SiSpring} name="Spring" percent={60} /> */}
          <SkillBar icon={FaNodeJs} name="Node.js" percent={70} />
          {/* <SkillBar icon={SiExpress} name="Express.js" percent={65} /> */}
          <SkillBar icon={SiMongodb} name="MongoDB" percent={65} />
          <SkillBar icon={SiOracle} name="Oracle" percent={60} />
          <SkillBar icon={SiSqlite} name="SQL" percent={80} />
          <SkillBar icon={SiPython} name="Python" percent={70} />
        </div>

        {/* Other Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Other Tools</h3>
          <SkillBar icon={SiC} name="C" percent={80} />
          <SkillBar icon={SiCplusplus} name="C++" percent={75} />
          <SkillBar icon={FaGithub} name="GitHub" percent={80} />
          <SkillBar icon={SiVercel} name="Vercel" percent={70} />
          <SkillBar icon={SiVite} name="Vite" percent={70} />
          <SkillBar icon={VscVscode} name="VS Code" percent={90} />
          <SkillBar icon={SiXampp} name="XAMPP" percent={65} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
