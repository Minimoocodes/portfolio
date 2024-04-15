import React from "react";
import projects from "../assets/data/projects";

const Projects = React.forwardRef(({ proejectsRef }, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto">
      <div className="flex items-center gap-2">
        <img
          src="https://static.thenounproject.com/png/4825734-200.png"
          width={60}
        />
        <h2 className="md:text-2xl sm:text-2lg text-xl font-bold">PROJECTS</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="py-10 flex flex-col items-center gap-5 my-10 bg-slate-50 border-b-2 "
          >
            <img
              src={project.src}
              className="rounded-md w-1/2 center lg:w-2/3"
            />
            <div className="flex gap-5 flex-wrap p-4 justify-center">
              {project.program.map((program, programIndex) => (
                <button
                  key={programIndex}
                  className="rounded-lg p-2 shadow-md shadow-cyan-500/50 text-cyan-700 font-bold"
                >
                  {program}
                </button>
              ))}
            </div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-lg w-3/4">{project.subText}</p>
            <div className="flex justify-center items-center gap-5 p-4">
              <a href={project.siteLink}>
                <button className="bg-sky-500/50 py-2 px-10 rounded-xl text-white hover:bg-sky-600 ">
                  Go see the site
                </button>
              </a>
              <a href={project.codeLink}>
                <button className="bg-sky-500/50 py-2 px-10 rounded-xl text-white  hover:bg-sky-600">
                  Go see the code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
