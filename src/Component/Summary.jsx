import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Summary = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className=" md:mt-6 mt-4 md:text-justify text-start  ">
      I'm an Electronics and Telecommunication Engineering graduate (2025) from GCE Karad, currently working as a Programmer Analyst Trainee at Cognizant. I specialize in Full Stack development, primarily working with .NET 8 and Microservices. I love building scalable applications and exploring modern architectural patterns like CQRS and gRPC. You can view my latest projects, including a production-ready Clinical CRM, in the "
      <span className=" font-bold font-sans opacity-70">Projects</span>" section .{" "}
      <a
        href="https://adityapachupateretrofolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-500 hover:underline"
      >
        Switch to Retro Folio
      </a>
      <div className=" opacity-65 hover:opacity-95 transition-all  flex flex-row gap-1 items-center my-2 group cursor-pointer w-fit">
        <Link
          onClick={scrollToTop}
          to="/about"
          className="  font-sans font-semibold text-lg group-hover:underline transition-all "
        >
          Get in touch 
        </Link>
        <div className=" group-hover:-rotate-45 transition-all">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  )
}

export default Summary