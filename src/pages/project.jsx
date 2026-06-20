import ProjectBox from "../Component/projectbox"
import Title from "../Component/Title"
import Screen from "../Layouts/Screen"
import data from "../../portfolio-data.json";


const Project = () => {
  const projects = [
    {
      id: 1,
      img: "./project/crm.png",
      title: "CRM Fullstack",
      status: true,
      statusColor: "text-green-500",
      content:
        "Engineered a high-performance CRM using Vertical Slice Architecture and CQRS (MediatR), decoupling business logic across 20+ feature slices for enterprise-scale maintainability. Implemented predictive prefetching, reducing perceived API latency by 60% on the React frontend. Built a bulk CSV import system processing 10,000+ records with row-by-row validation, duplicate detection, and structured logging (Serilog).",
      url: data.projectLinks.crmUrl,
      github: data.projectLinks.crmGithubProject,
      skill: [".Net Core", "C#", "SQL Server", "React", "CQRS", "IndexedDB"],
    },
    {
      id: 2,
      img: "./project/MoodFlix.PNG",
      title: "MoodFlix",
      status: true,
      statusColor: "text-green-500",
      content:
        "TMoodflix is a modern movie discovery platform designed to provide a seamless and enjoyable experience for movie enthusiasts. Built with React.js, it offers a sleek and responsive interface for browsing and discovering movies.",
      url: data.projectLinks.moodFlixUrl,
      github: data.projectLinks.moodFlixGithub,
      skill: ["ReactJS", "Javascript", "Tailwind", ],
      // preview: "./preview/dailycrimes.mp4",
    },
    
  ]

  return (
    <Screen>
      <div className="flex flex-row justify-between items-center">
        <Title title="Projects" />
        <a
          href={data.otherLinks.githubRepositories}
          target="_blank"
          className=" font-medium text-blue-500 hover:underline tracking-tight"
        >
          More on Github
        </a>
      </div>

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
            remove={project.remove}
          />
        </div>
      ))}
    </Screen>
  )
}

export default Project
