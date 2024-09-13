import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import mybooks from "../../public/mybooks.png";
import ICI from "../../public/ICI.png";
import marvel from "../../public/marvel.png";

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
    title: "Haute École Francisco Ferrer",
    location: "Brussels",
    description:
      "I studied at Haute Ecole Fransico Ferrer in Web infography. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2024",
  },
  {
    title: "Internship-Full-Stack Developer at Molengeek",
    location: "Brussels",
    description:
      "I completed a 4-month internship at Molengeek as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "My Books",
    description:
      "Creation of the MyBooks site in React to record and search for reading ideas. MyBooks allows users to add, edit, and delete books from their list while providing advanced search options by title, author, or genre.",
    tags: ["React", "Firebase", "Tailwind", "Redux", "Bootstrap"],
    imageUrl: mybooks,
    url: "https://mybooks-d5283.web.app/",
  },
  {
    title: "Marvel Quizz",
    description:
      "Development of Marvel Quizz, an app that lets users test their knowledge of the Marvel universe. The app features multiple-choice questions of varying difficulty levels, with a scoring system to track user performance.",
    tags: ["React", "Firebase", "Bootstrap", ],
    imageUrl: marvel,
    url: "https://quizz-1830.web.app/",
  },
  {
    title: "Institut des cours industiels",
    description:
      "Creation of the website for the Institut des Cours Industriels in Brussels as part of my Multimedia Applications and UX Design course. The site showcases the institute's training programs and key information.",
    tags: ["Bootstrap", "Scss", "SQL", "Wordpress"],
    imageUrl: ICI,
    url: "https://www.coursindustriels.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Wordpress",
  "Elementor",
  "PHP",
  "Jest",
  "Figma",
  "Framer Motion",
  "Bootstrap",
  "Firebase",
  "SQL",
  "jQuery",
  "GSAP",
] as const;
