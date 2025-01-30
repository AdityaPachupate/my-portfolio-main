import { FaRegFile } from "react-icons/fa6"
import ProjectBox from "./projectbox"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import CompScreen from "../Layouts/CompScreen"
import Title from "./Title"

const SelectedProjects = () => {
  const projects = [
    {
      id: 1,
      img: "./project/MoodFlix.PNG",
      title: "MoodFlix",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "TMoodflix is a modern movie discovery platform designed to provide a seamless and enjoyable experience for movie enthusiasts. Built with React.js, it offers a sleek and responsive interface for browsing and discovering movies.",
      url: "https://mood-flix-five.vercel.app/",
      github: "https://github.com/AdityaPachupate55/MoodFlix",
      skill: ["ReactJS", "Javascript", "Tailwind", ],
      // preview: "./preview/dailycrimes.mp4",
    },
    
  ]

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <CompScreen>
      <Title title="Selected Projects" icon={<FaRegFile />} />
      {projects.map((project) => (
        <div key={project.id} className=" md:px-1.5">
          <ProjectBox
            img={project.img}
            title={project.title}
            status={project.status}
            statusColor={project.statusColor}
            content={project.content}
            url={project.url}
            github={project.github}
            skill={project.skill}
            preview={project.preview}
          />
        </div>
      ))}

      <div className="flex justify-center mt-4">
        <Link to="/project" whileTap={{ scale: 0.85 }} onClick={scrollToTop}>
          <motion.div
            whileHover={{
              scale: 1.07,
            }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => handleNavigation("/project")}
            className="px-2 py-1.5 font-sans  cursor-pointer dark:shadow-none dark:border-none hover:bg-gray-200 dark:hover:bg-white/20 border-2 border-gray-200 shadow-md shadow-gray-300 font-medium text-black dark:text-white dark:bg-white/30 w-fit rounded-md "
          >
            show more
          </motion.div>
        </Link>
      </div>
    </CompScreen>
  )
}

export default SelectedProjects
