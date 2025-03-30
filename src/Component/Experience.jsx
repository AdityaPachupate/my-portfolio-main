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
              {/* Flex container for role and date */}
              <div className="flex justify-between items-start">
                {/* Role and Company */}
                <div>
                  <h3 className="text-xl font-semibold">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-300">
                    {experience.company}
                  </p>
                </div>

                {/* Tenure (Date) */}
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {experience.year}
                </p>
              </div>

              {/* Description */}
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                  key={i}
                  className="flex flex-row gap-1 rounded-md justify-center items-center font-medium w-fit px-2 dark:bg-white/30 shadow shadow-gray-200 border-2 border-gray-200 dark:shadow-none dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 cursor-pointer transition-all"
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