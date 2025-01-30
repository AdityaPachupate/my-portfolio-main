
import { GiTie , GiFeather  } from "react-icons/gi";
import CompScreen from "../Layouts/CompScreen";
import Title from "./Title";
import socialMediaLinks from "../../links";

const Highlights = () => {
  return (
    <CompScreen>
      <Title title="Highlights" icon={<GiFeather/>} />
      <div className="mt-3 text-base ">
        <div className="border-b-2 dark:border-white/30 "></div>
        <div className=" divide-y-2 dark:divide-white/30 ">
          <div>
            <div className=" py-4 md:text-justify text-start  ">
              I'm currently on a 100 Days of Code journey, which I started on
              Feb 1, 2025 . Every day, I'm learning something new in both DSA
              and Development . If you'd like to follow my progress, feel free
              to follow me on{" "}
              <a
                href={socialMediaLinks.twitter}
                target="_blank"
                className="text-blue-500 font-semibold font-sans hover:underline cursor-pointer"
              >
                Twitter
              </a>
              . You can also check my overall progress in this{" "}
              <a
                href={socialMediaLinks.github}
                target="_blank"
                className="text-blue-500 font-semibold font-sans hover:underline cursor-pointer"
              >
                Repository
              </a>
              .
            </div>
          </div>
          <div>
            <div className=" py-4 md:text-justify text-start ">
            I started my journey as an <a
                href={socialMediaLinks.github}
                target="_blank"
                className="text-blue-500 font-semibold font-sans hover:underline cursor-pointer"
              >
                Embedded System Developer intern
              </a> , working with microcontrollers and C. Over time, I developed an interest in web development, particularly in building user interfaces. This curiosity led me to create my first website during a hackathon, using HTML, CSS, and JavaScript, and marked the beginning of my transition into the world of web development. Unfortunately, we didn't win, but we learned a lot and really enjoyed meeting fellow tech nerds... haha!{" "}
            </div>
          </div>
        </div>
        <div className="border-b-2 dark:border-white/30"></div>
      </div>
    </CompScreen>
  );
};

export default Highlights;
