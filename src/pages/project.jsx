import ProjectBox from "../Component/projectbox"
import Title from "../Component/Title"
import Screen from "../Layouts/Screen"
import {socialMediaLinks} from "../Constants/links"


const Project = () => {
  const projects = [
    {
      id: 1,
      img: "./project/MoodFlix.PNG",
      title: "MoodFlix",
      status: true,
      statusColor: "text-green-500",
      content:
        "TMoodflix is a modern movie discovery platform designed to provide a seamless and enjoyable experience for movie enthusiasts. Built with React.js, it offers a sleek and responsive interface for browsing and discovering movies.",
      url: "https://mood-flix-five.vercel.app/",
      github: "https://github.com/AdityaPachupate/MoodFlix",
      skill: ["ReactJS", "Javascript", "Tailwind", ],
      // preview: "./preview/dailycrimes.mp4",
    },
    
  ]

  return (
    <Screen>
      <div className="flex flex-row justify-between items-center">
        <Title title="Projects" />
        <a
          href="https://github.com/AdityaPachupate?tab=repositories"
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
