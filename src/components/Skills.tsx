import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import Lottie from "lottie-react";
import SkillsAnimation from "../assets/SkillsAnimation.json";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiFlask,
  SiGraphql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiOpencv,
  SiScikitlearn,
} from "react-icons/si";
import { FaDatabase, FaCloud, FaBrain, FaProjectDiagram } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import SectionHeading from "./SectionHeading";

const skills = [
  // Programming Languages
  { name: "Python", icon: <SiPython className="text-blue-500 text-5xl" /> },
  { name: "C", icon: <SiC className="text-gray-700 text-5xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700 text-5xl" /> },

  // Frontend
  { name: "React.js", icon: <SiReact className="text-cyan-500 text-5xl" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500 text-5xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },

  // Backend
  { name: "Flask", icon: <SiFlask className="text-gray-900 text-5xl" /> },
  { name: "RESTful APIs", icon: <TbApi className="text-green-700 text-5xl" /> },
  { name: "GraphQL (Apollo)", icon: <SiGraphql className="text-pink-500 text-5xl" /> },
  { name: "LangChain", icon: <FaBrain className="text-purple-700 text-5xl" /> },
  { name: "AWS", icon: <SiAmazon className="text-orange-400 text-5xl" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400 text-5xl" /> },
  { name: "Git", icon: <SiGit className="text-black text-5xl" /> },

  // Database
  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-5xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-900 text-5xl" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-gray-900 text-5xl" /> },

  // Tools & Frameworks
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
  { name: "PowerBI", icon: <FaDatabase className="text-yellow-700 text-5xl" /> },
  { name: "OpenCV", icon: <SiOpencv className="text-green-700 text-5xl" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-700 text-5xl" /> },

  // Technical Concepts
  { name: "Machine Learning", icon: <FaBrain className="text-pink-500 text-5xl" /> },
  { name: "Neural Networks", icon: <FaBrain className="text-purple-500 text-5xl" /> },
  { name: "Distributed Systems", icon: <FaProjectDiagram className="text-blue-700 text-5xl" /> },
  { name: "Data Privacy", icon: <FaCloud className="text-gray-700 text-5xl" /> },
  { name: "RAG Architecture", icon: <FaProjectDiagram className="text-green-700 text-5xl" /> },
  { name: "Cloud Storage Lifecycle", icon: <FaCloud className="text-blue-400 text-5xl" /> },
];

const repeatedSkills = [...skills, ...skills, ...skills];

const SKILLS_HEIGHT = 260; // px

const Skills: React.FC = () => {
  const [ref, inView] = useInView();
  const [isGrid, setIsGrid] = useState(false);

  return (
    <section
      ref={ref}
      className={`w-full flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-0 md:px-8 py-12 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <SectionHeading>Skills</SectionHeading>
      {/* Switch Toggle */}
      <div className="mb-8 flex items-center justify-center w-full">
        <label className="flex items-center cursor-pointer gap-3">
          <span className="text-gray-900 dark:text-gray-100 font-bold">Marquee</span>
          <div className="relative">
            <input
              type="checkbox"
              checked={isGrid}
              onChange={() => setIsGrid((prev) => !prev)}
              className="sr-only"
            />
            <div
              className={`w-14 h-8 bg-blue-200 dark:bg-gray-800 rounded-full transition-colors duration-500`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-blue-700 rounded-full shadow transition-all duration-500 ${
                isGrid ? "translate-x-6 bg-blue-700 dark:bg-yellow-400" : ""
              }`}
            ></div>
          </div>
          <span className="text-gray-900 dark:text-gray-100 font-bold">Grid</span>
        </label>
      </div>
      <div
        className="w-full flex flex-col md:flex-row items-center justify-center transition-all duration-700"
        style={{
          minHeight: isGrid ? "85vh" : `${SKILLS_HEIGHT}px`,
          height: isGrid ? "85vh" : `${SKILLS_HEIGHT}px`,
        }}
      >
        <div className={`relative w-full ${isGrid ? "md:w-2/3" : "flex-1"} flex flex-col items-center justify-center h-full`}>
          {/* Marquee */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              isGrid ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            style={{ height: `${SKILLS_HEIGHT}px` }}
          >
            <div className="overflow-hidden w-full flex justify-center group h-full">
              <div className="flex gap-8 animate-marquee whitespace-nowrap py-4 h-full">
                {repeatedSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="skill-card flex flex-col items-center justify-center bg-white dark:bg-gray-900 border border-blue-200 dark:border-gray-700 px-12 py-10 rounded-2xl shadow-lg text-2xl font-bold mx-6 min-w-[220px] min-h-[220px] transition-all duration-500"
                  >
                    {skill.icon}
                    <span className="mt-6 text-gray-900 dark:text-gray-100">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Grid */}
          <div
            className={`relative inset-0 transition-opacity duration-700 ${
              isGrid ? "opacity-100" : "opacity-0 pointer-events-none"
            } flex items-center justify-center mt-10`}
            style={{ height: "100vh" }}
          >
            <div className="w-full h-full overflow-y-auto flex items-center justify-center px-4 py-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full overflow-visible">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="skill-card flex flex-col items-center justify-center bg-white dark:bg-gray-900 border border-blue-200 dark:border-gray-700 px-2 py-2 rounded-2xl shadow-lg text-base font-bold transition-all duration-500 min-h-[60px]"
                  >
                    {React.cloneElement(skill.icon, { className: `${skill.icon.props.className} text-xl` })}
                    <span className="mt-2 text-gray-900 dark:text-gray-100 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Show Lottie in grid mode, 1/3 width */}
        {isGrid && (
          <div className="hidden md:flex md:w-1/3 items-center justify-center h-full">
            <Lottie
              animationData={SkillsAnimation}
              loop={true}
              className="w-48 h-48 md:w-72 md:h-72"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;