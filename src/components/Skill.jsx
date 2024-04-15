import React from "react";

// icon imports
import skill from "../assets/img/skills/skill.png";
import html from "../assets/img/skills/html.webp";
import css from "../assets/img/skills/css.png";
import javascript from "../assets/img/skills/javascript.png";
import react from "../assets/img/skills/react.png";
import redux from "../assets/img/skills/redux.png";
import react_query from "../assets/img/skills/react_query.png";
import git from "../assets/img/skills/git.png";
import github from "../assets/img/skills/github.svg";
import bootstrap from "../assets/img/skills/bootstrap.png";
import tailwind from "../assets/img/skills/tailwind.png";
import seo from "../assets/img/skills/seo.png";
import node from "../assets/img/skills/node.png";
import postgreSQL from "../assets/img/skills/postgreSQL.png";
import mongoDB from "../assets/img/skills/mongoDB.png";

const skills = [
  {
    name: "html",
    src: html,
    alt: "html icon",
  },
  {
    name: "css",
    src: css,
    alt: "css icon",
  },
  {
    name: "javascript",
    src: javascript,
    alt: "javascript icon",
  },
  {
    name: "react",
    src: react,
    alt: "react icon",
  },
  {
    name: "redux",
    src: redux,
    alt: "redux icon",
  },
  {
    name: "react_query",
    src: react_query,
    alt: "react query icon",
  },
  {
    name: "git",
    src: git,
    alt: "git icon",
  },
  {
    name: "github",
    src: github,
    alt: "github icon",
  },
  {
    name: "bootstrap",
    src: bootstrap,
    alt: "bootstrap icon",
  },
  {
    name: "tailwind",
    src: tailwind,
    alt: "tailwind icon",
  },
  { name: "seo", src: seo, alt: "seo icon" },
  { name: "node", src: node, alt: "node" },
  { name: "PostgreSQL", src: postgreSQL, alt: "postgreSQL" },
  { name: "MongoDB", src: mongoDB, alt: "mongoDB" },
];

const Skill = React.forwardRef(({ skillsRef }, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto">
      <div className="flex items-center gap-2">
        <img src={skill} alt="skill icon" width={60} />
        <h2 className="md:text-2xl sm:text-2lg text-xl font-bold">SKILLS</h2>
      </div>
      <div className="my-5">
        <ul className="flex flex-wrap tems-center gap-10 justify-center">
          {skills.map((skill, index) => (
            <div className="p-4 text-center" key={index}>
              <img
                src={skill.src}
                className="p-5 h-20 w-20 shadow rounded-md shadow-indigo-500/40"
              />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Skill;
