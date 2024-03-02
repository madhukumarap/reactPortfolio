import React, { useState } from "react";
import Sectiontitle from "../../components/sectionTitle";
// import { experiences } from '../../resources/experiences';
import { projects } from "../../resources/projects";
const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <Sectiontitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c87] w-[110%] sm:flex-row sm:overflow-scroll sm:w-full">
          {projects.map((projectes, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
                    : "text-white"
                }`}
              >
                {projectes.title}
              </h1>
              {/* Add other fields you want to display */}
            </div>
          ))}
        </div>
        <div></div>
        <div className="flex flex-col gap-10">
          <h1 className="text-secondary text-xl">
            {projects[selectedItemIndex].title}
          </h1>
          <h1 className="text-secondary text-xl">
            {projects[selectedItemIndex].image}
          </h1>
          <p className="text-white">
            {projects[selectedItemIndex].description}
          </p>
          <a href="/" className="text-white">
            {projects[selectedItemIndex].link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
