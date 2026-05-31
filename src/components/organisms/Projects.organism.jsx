import React from "react";
import ProjectCard from "../molecules/ProjectCard";
import ProjectData from "../../assets/data/projects.json";

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
      {ProjectData.map((project) => (
        <div key={project.name}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
