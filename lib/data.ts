import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommImg from "@/public/ecomm.png";
import metaversusImg from "@/public/metaversus.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "Agra, India",
    description:
      "Bachelor of Engineering in Computer Science & Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Remote",
  //   description:
  //     "I worked as a front-end developer for 2 months in PiBlitz, where I developed responsive design of website.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "Aug'2020-Oct'2020",
  // },
  {
    title: "Intermediate",
    location: "Firozababd, India",
    description:
      "CBSE Board ",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "High School",
    location: "Firozabad, India",
    description:
      "CBSE Board",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
] as const;

export const projectsData = [
  {
    title: "",
    description:
      "No projects yet.",
    tags: ["#"],
    
  },
  // {
  //   title: "Metaversus",
  //   description:
  //     "I used the Metaverse Madness template as a learning point to create a visually appealing and engaging landing page using Next.js and Framer Motion.",
  //   tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
  //   imageUrl: metaversusImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: metaversusImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  // "JavaScript",
  // "React",
  // "Next.js",
  // "Node.js",
  // "Git",
  // "Tailwind",
  // "MongoDB",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  // "Framer Motion",
  "PHP",
  "Github",
  "C"
] as const;