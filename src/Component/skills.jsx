import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import {
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
  RiHtml5Fill,
} from "react-icons/ri";
import {
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
  SiMysql,
  SiTypescript
} from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbHexagonLetterC,
  TbBrandCSharp
} from "react-icons/tb";

import { PiFileCSharpBold } from "react-icons/pi";
import { DiDotnet , DiAngularSimple ,DiMsqlServer  } from "react-icons/di";
import { VscTerminalLinux, VscTools } from "react-icons/vsc";
import CompScreen from "../Layouts/CompScreen";
import Title from "./Title";

const Skills = () => {
  const skills = [
    // ========== Frontend Development ==========
    { id: 1, icon: <RiHtml5Fill />, text: "HTML" },
    { id: 2, icon: <FaCss3Alt />, text: "CSS" },
    { id: 3, icon: <DiJavascript />, text: "JavaScript" },
    { id: 4, icon: <SiTypescript />, text: "TypeScript" },
    { id: 5, icon: <RiTailwindCssFill />, text: "TailwindCSS" },
    { id: 6, icon: <RiReactjsLine />, text: "ReactJS" },
    { id: 7, icon: <DiAngularSimple />, text: "Angular" },
  
    // ========== Backend Development ==========
    { id: 8, icon: <IoLogoNodejs />, text: "Node.js" },
    { id: 9, icon: <SiExpress />, text: "Express.js" },
  
    // ========== Database & API Tools ==========
    { id: 10, icon: <SiMongodb />, text: "MongoDB" },
    { id: 11, icon: <TbBrandMysql />, text: "MySQL" },
    { id: 12, icon: <DiMsqlServer />, text: "SQL Server" },
    { id: 12, icon: <SiPostman />, text: "Postman" },
  
    // ========== Version Control & Deployment ==========
    { id: 13, icon: <FaGitAlt />, text: "Git" },
    { id: 14, icon: <FaGithub />, text: "GitHub" },
    { id: 15, icon: <SiVercel />, text: "Vercel" },
  
    // ========== Programming Languages ==========
    { id: 16, icon: <TbHexagonLetterC />, text: "C" },
    { id: 17, text: "C++" },
    { id: 18, icon: <PiFileCSharpBold />, text: "C#" },
  
    // ========== .NET Stack ==========
    { id: 19, icon: <DiDotnet />, text: ".NET" },
  ];

  return (
    <CompScreen>
      <Title title="Skills & Tools" icon={<VscTools />} />

      <div className=" mt-3 flex flex-wrap gap-1.5 dark:text-white text-lg   text-gray-700">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-row gap-1 rounded-md justify-center items-center font-medium w-fit px-2 dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 cursor-pointer transition-all"
          >
            {skill.icon}
            {skill.text}
          </div>
        ))}
      </div>
    </CompScreen>
  );
};

export default Skills;
