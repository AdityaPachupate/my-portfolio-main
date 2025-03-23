import { EXPERIENCES } from "../Constants/constant";
import { GiFeather } from "react-icons/gi";
import CompScreen from "../Layouts/CompScreen";
import Title from "./Title";
import React from "react";

const Experience = () => {
  return (
    <CompScreen>
      <Title title="Experience" icon={<GiFeather />} />
      <div className="mt-3 text-base">
        <div className="border-b-2 dark:border-white/30"></div>
        <div className="divide-y-2 dark:divide-white/30">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="py-4">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {experience.year}
              </p>
              <h3 className="text-xl font-semibold mt-1">
                {experience.role} · {experience.company}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {experience.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm  border-2 border-gray-300 dark:border-white/30 rounded-full hover:border-gray-400 dark:hover:border-white/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-b-2 dark:border-white/30"></div>
      </div>
    </CompScreen>
  );
};

export default Experience;
