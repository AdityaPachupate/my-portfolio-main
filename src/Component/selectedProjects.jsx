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
      img: "./project/crm.png",
      title: "Production-Ready Clinical CRM",
      status: true,
      statusColor: "text-green-500",
      content:
        "Engineered a high-performance CRM using Vertical Slice Architecture and CQRS (MediatR). Features predictive prefetching, optimistic UI, and offline resilience with IndexedDB. Includes structured logging (Serilog), automated background jobs, and health check endpoints.",
      url: "https://crm-client-m898.onrender.com/",
      github: "https://github.com/AdityaPachupate/crm-fullstack",
      skill: [".NET 8", "React", "CQRS", "MediatR", "IndexedDB", "Serilog"],
    },
    {
      id: 2,
      img: "./project/ecommerce.png",
      title: "Full Stack E-commerce App",
      status: true,
      statusColor: "text-green-500",
      content:
        "Engineered a full-stack e-commerce platform using Angular and ASP.NET Core Web API. Implemented JWT-based authentication, role-based authorization, and a complete product catalog with EF Core and SQL Server.",
      url: "",
      github: "https://github.com/AdityaPachupate",
      skill: [".NET Core", "Angular", "JWT", "EF Core", "SQL Server"],
    },
    {
      id: 3,
      img: "./project/MoodFlix.PNG",
      title: "MoodFlix",
      status: true,
      statusColor: "text-green-500",
      content:
        "Moodflix is a modern movie discovery platform built with React.js. It offers a sleek and responsive interface for browsing and discovering movies based on mood and categories.",
      url: "https://mood-flix-five.vercel.app/",
      github: "https://github.com/AdityaPachupate/MoodFlix",
      skill: ["ReactJS", "Javascript", "Tailwind"],
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
        <Link to="/project" onClick={scrollToTop}>
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
