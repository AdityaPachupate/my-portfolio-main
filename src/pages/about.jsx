import Screen from "../Layouts/Screen";
import Title from "../Component/Title";
import SelectedCertificate from "./../Component/Certificates";
import { IoDocumentText  } from "react-icons/io5";
import Experience from "../Component/Experience";
import {resume} from "../Constants/links";

const About = () => {
  return (
    <Screen>
      <div className="flex flex-row justify-between items-center">
        <Title title="About Me" />
        {/* <a
          href={socialMediaLinks.twitter}
          target="_blank"
          className=" font-medium text-blue-500 hover:underline tracking-tight"
        >
          Follow me on X
        </a> */}
      </div>
      <div className=" md:px-1.5 ">
        <div className=" mt-6 md:mt-0 ">
          <div className=" flex flex-row gap-2 items-center justify-between mt-2 ">
            <div className=" text-start w-full hidden md:block  ">
              <ul className="">
                <li className=" flex flex-row gap-2 items-start">
                  <i className="fa-solid fa-paper-plane mt-1"></i>
                  <div>
                    Lives in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Karad"
                      target="_blank"
                      className=" font-semibold underline cursor-pointer hover:text-blue-500"
                    >
                      Karad, India.
                    </a>
                  </div>
                </li>
                <li className=" flex flex-row gap-2 items-start">
                  <i className="fa-solid fa-graduation-cap mt-1"></i>
                  <div>
                    B.Tech in{" "}
                    <span className="text-blue-500 font-semibold">
                      Electronics and Telecommunication Engineering
                    </span>
                    {" "}(2025 Graduate).
                  </div>
                </li>
                <li className=" flex flex-row gap-2 items-start">
                  <i className="fa-solid fa-screwdriver-wrench mt-1"></i>
                  <div>
                    Primarily work with{" "}
                    <span>
                      <span className="text-blue-500 font-semibold">
                        .NET 8
                      </span>
                      ,{" "}
                      <span className="text-blue-500 font-semibold">
                        SQL Server
                      </span>
                      , and{" "}
                      <span className="text-blue-500 font-semibold">Microservices</span>
                      .
                    </span>
                  </div>
                </li>
                <li className=" flex flex-row gap-2 items-start">
                  <i className="fa-solid fa-briefcase mt-1"></i>
                  <div>
                    Programmer Analyst Trainee at <span className="text-blue-500 font-semibold">Cognizant</span>.
                  </div>
                </li>
                <li className=" flex flex-row gap-2 items-start">
                  <i className="fa-solid fa-people-group mt-1"></i>
                  <div>Always open to collaborating on research or development.</div>
                </li>

                <li className=" flex flex-row gap-2 items-start">
                  <i className="mt-1"><IoDocumentText /></i>
                  <div>
                    Get my Resume{" "}
                    <a
                      target="_blank"
                      href={resume.resumeDriveLink}
                      rel="noopener noreferrer"
                      className=" font-semibold underline hover:text-blue-500"
                    >
                      Here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <img
              className=" border md:size-40 md:scale-90  rounded-xl md:rounded-full hover:grayscale  transition-all delay-100"
              src="/IMG/dp3.jpg"
            />
          </div>

          <div className=" ">
            <div className="p- my-7 p-5 md:text-justify text-start mt-6 border-2 border-gray-300 dark:border-white/30 rounded-lg hover:border-gray-400 dark:hover:border-white/50 transition-colors">
              Hey, I'm Aditya Pachupate, an Electronics and Telecommunication Engineering graduate (2025) with a strong passion for software development. I'm currently working as a Programmer Analyst Trainee at Cognizant, specializing in Full Stack .NET development. I love building scalable things and learning new technologies every day. I mainly work with React and Angular for frontend, and .NET 8, gRPC, and Microservices for backend.
              {" "}
              <a
                href="https://adityapachupateretrofolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-500 hover:underline"
              >
                Switch to Retro Folio
              </a>
            </div>
            {/* <div className=" my-4  md:text-justify text-start ">
              With a strong foundation in various technologies, I have
              participated in multiple hackathons where I implemented innovative
              ideas using different tech stacks. I also earned some exciting
              merchandise and prizes, including Certificates. These experiences
              highlight my ability to work as a team player and lead a team
              effectively. I've successfully worked under various circumstances
              and tight timelines, adapting quickly to ensure the success of
              every project.
            </div> */}
            
          </div>
        </div>
        <Experience />
        {/* <SelectedCertificate /> */}
        
      </div>
    </Screen>
  );
};

export default About;
