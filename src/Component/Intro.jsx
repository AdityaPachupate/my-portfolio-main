import { useEffect, useState } from "react"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import { FiLinkedin } from "react-icons/fi"
import { LuGithub } from "react-icons/lu"
import { SiLeetcode ,SiGeeksforgeeks } from "react-icons/si"
import data from "../../portfolio-data.json"
import { HiOutlineDocumentText } from "react-icons/hi2"

const Intro = () => {   
  const links = [
    {
      href: data.socialMedia.twitter,
      logo: <FaXTwitter />,
    },
    {
      href: data.socialMedia.github,
      logo: <LuGithub />,
    },
    {
      href: data.socialMedia.linkedinProfile,
      logo: <FiLinkedin />,
    },
    {
      href: data.socialMedia.leetcode,
      logo: <SiLeetcode />,
    },
    {
      href: data.socialMedia.gfg,
      logo: <SiGeeksforgeeks  />,
    },
    {
      href: data.socialMedia.instagram,
      logo: <FaInstagram />,
    },
    {
      href: `${data.otherLinks.resumeDriveLink}?t=${Date.now()}`,
      logo: <HiOutlineDocumentText />,
    },
  ]

  return (
    <div className=" flex flex-row gap-3 items-center">
      <img
        src="./IMG/dp3.jpg"
        className=" border md:size-40 size-32 rounded-full"
      />
      <div className=" flex flex-col">
        <div className=" md:text-4xl text-2xl font-bold font-bricolage">
          <span className=" text-theme-blue">Aditya</span> Pachupate
        </div>
        <div className=" md:text-lg hidden md:block text-sm font-semibold font-bricolage text-gray-600 dark:text-white">
          <span className=" text-pink-500">Full stack developer</span> 
        </div>
        <div className=" md:hidden font-semibold">
          A <span className=" text-pink-500">Full-Stack Developer</span>.
        </div>

        <div className="flex flex-wrap gap-3 text-2xl mt-1">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              {item.logo}
            </a>
          ))}
        </div>
        {/* <a
          href=""
          target="_blank"
          className=" hover:underline mt-1 w-fit text-blue-500"
        >
          therinkit-linkit.online
        </a> */}
      </div>
    </div>
  )
}

export default Intro
