import Screen from "../Layouts/Screen";
import Title from "../Component/Title";
import SelectedCertificate from "./../Component/Certificates";
import { IoCodeSlash , IoDocumentText  } from "react-icons/io5";
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
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-paper-plane"></i> Lives in{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Karad"
                    target="_blank"
                    className=" font-semibold underline cursor-pointer hover:text-blue-500"
                  >
                    Karad, India.
                  </a>
                </li>
                <li className=" flex flex-row gap-1 items-center">
                  <i className="fa-solid fa-graduation-cap"></i>
                  Pursuing a Bachelor’s degree in{" "}
                  <span className="text-blue-500 font-semibold">
                    Electronics and Telecommunication Engineering
                  </span>
                  .
                </li>
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                  Primarily work with{" "}
                  <span>
                    <span className="text-blue-500 font-semibold">React</span>,{" "}
                    <span className="text-blue-500 font-semibold">
                      Javascript
                    </span>
                    ,{" "}
                    <span className="text-blue-500 font-semibold">
                      Tailwind CSS
                    </span>
                    ,{" "}
                    <span className="text-blue-500 font-semibold">Node.js</span>
                    , and{" "}
                    <span className="text-blue-500 font-semibold">MongoDB</span>
                    .
                  </span>
                </li>
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-briefcase"></i>
                  Open to new opportunities and freelancing. Any support is
                  appreciated!
                </li>
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-people-group"></i>
                  Always open to collaborating on research or development.
                </li>

                <li className=" flex flex-row gap-1 items-center">
                  <i><IoDocumentText />
                  </i>Get my Resume {" "}
                  <a
                    target="_blank"
                    href={resume.resumeDriveLink}
                    rel="noopener noreferrer"
                    className="  font-semibold underline hover:text-blue-500"
                  >
                    Here
                  </a>
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
              Hey, I'm Aditya Pachupate, a fouth-year student exploring the field
              of engineering. I live in Karad, India, and I'm a full-stack
              developer who loves building things and learning something new
              every day from them. I mainly work with React with Javascript and
              Tailwind for frontend development and NodeJS and MongoDB for
              backend. I'm looking for opportunities in both web development and
              software engineering roles.
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
        
        <div className="mt-10">
          <div className="flex flex-row justify-start mt-7 md:mt-5">
            <Title title=" Days I code" icon={<IoCodeSlash />} />
          </div>

          <div className=" p-4 ">
            <div className="overflow-x-scroll">
              <div className="md:w-full w-[850px] ">
                <img
                  className="w-full h-auto"
                  src="https://ghchart.rshah.org/008000/AdityaPachupate55"
                  alt="Aditya's Github chart"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row gap-2 ">
              <div className="border-[1px] border-gray-900 rounded-lg">
                <img src="https://leetcard.jacoblin.cool/adityapachupate?height=350&theme=dark" />
              </div>
              <div className="border-[1px] border-gray-800 rounded-lg">
                <a href="https://www.geeksforgeeks.org/user/adityapachupate/">
                  <img
                    src="https://gfgstatscard.vercel.app/adityapachupate"
                    alt="GFG stats"
                    
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default About;
