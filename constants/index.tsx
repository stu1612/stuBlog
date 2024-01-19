import { HiHome } from "react-icons/hi2";
import { IoReaderSharp } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { MdContactEmergency } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const navLinks = [
  {
    id: 0,
    title: "Home",
    href: "/",
    icon: <HiHome />,
  },
  {
    id: 1,
    title: "Blogs",
    href: "/blogs",
    icon: <IoReaderSharp />,
  },
  {
    id: 2,
    title: "About",
    href: "/about",
    icon: <IoPersonCircle />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <MdContactEmergency />,
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/stuartbolderson/",
    icon: <IoLogoLinkedin size={26} />,
  },
  {
    id: 2,
    url: "https://github.com/stu1612",
    icon: <IoLogoGithub size={26} />,
  },
];
