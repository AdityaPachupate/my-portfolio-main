import { FaRegFile } from "react-icons/fa6"
import ProjectBox from "./projectbox"
import { Link } from "react-router-dom"
import data from "../../portfolio-data.json"
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
        "Engineered a high-performance CRM using Vertical Slice Architecture and CQRS (MediatR), decoupling business logic across 20+ feature slices for enterprise-scale maintainability. Implemented predictive prefetching, reducing perceived API latency by 60% on the React frontend. Built a bulk CSV import system processing 10,000+ records with row-by-row validation, duplicate detection, and structured logging (Serilog).",
      url: data.projectLinks.crmUrl,
      github: data.projectLinks.crmGithubSelected,
      skill: [".NET 8", "React", "CQRS", "MediatR", "IndexedDB", "Serilog"],
    },
    {
      id: 2,
      img: "./project/ecommerce.png",
      title: "Full Stack E-commerce App",
      status: true,
      statusColor: "text-green-500",
      content:
        "Built a full-stack e-commerce platform with Angular and ASP.NET Core Web API, featuring JWT authentication and role-based authorization. Implemented product catalog, shopping cart, and order-management modules using Entity Framework Core and SQL Server, exposing RESTful endpoints via Swagger with Repository Pattern and Dependency Injection.",
      url: "",
      github: data.projectLinks.ecommerceGithub,
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
      url: data.projectLinks.moodFlixUrl,
      github: data.projectLinks.moodFlixGithub,
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
