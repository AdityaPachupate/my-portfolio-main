import { useEffect, useState } from "react"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import { FiLinkedin } from "react-icons/fi"
import { LuGithub } from "react-icons/lu"
import { SiBuymeacoffee, SiLeetcode ,SiGeeksforgeeks } from "react-icons/si"
import {socialMediaLinks} from "../Constants/links.js"

const Intro = () => {   
  const links = [
    {
      href: `${socialMediaLinks.twitter}`,
      logo: <FaXTwitter />,
    },
    {
      href: `${socialMediaLinks.github}`,
      logo: <LuGithub />,
    },
    {
      href: `${socialMediaLinks.linkedin}`,
      logo: <FiLinkedin />,
    },
    {
      href: `${socialMediaLinks.leetcode}`,
      logo: <SiLeetcode />,
    },
    {
      href: `${socialMediaLinks.gfg}`,
      logo: <SiGeeksforgeeks  />,
    },
    {
      href: `${socialMediaLinks.instagram}`,
      logo: <FaInstagram />,
    },
    {
      href: "",
      logo: <SiBuymeacoffee />,
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
          <span className=" text-pink-500">Electronics engineer</span> {" "}
           turned out to be <span className=" text-pink-500">Full stack developer</span> 
        </div>
        <div className=" md:hidden font-semibold">
          A <span className=" text-pink-500">Full-Stack Developer</span>.
        </div>

        <div className="flex flex-wrap gap-3 text-2xl mt-1">
          {links.map((item) => (
            <a
              key={item.logo}
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
