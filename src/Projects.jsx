import Project from "./components/Project";
import { useEffect, useState } from "react";

function Projects() {
  const [projectData, setProjectData] = useState([]);

  const apiQueryURL = import.meta.env.VITE_API_QUERY;

  useEffect(() => {
    fetch(apiQueryURL)
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.result);
      });
  }, []);

  console.log(projectData);
  return (
    <div
      className='w-11/12 h-1/2 lg:w-1/2 md:w-9/12 my-0 mx-auto'
      id='projects'
    >
      <h2 className='font-light text-2xl md:text-3xl lg:text-4xl'>Projects</h2>
      <div className='bg-gray-400 h-[1px] w-full md:w-1/3 mt-1'></div>
      {projectData ? (
        projectData.map((project) => (
          <Project
            key={project._id}
            header={project.title}
            text={project.smallText}
            mainImg={project.mainImage.asset._ref}
            mainImgAlt='Project Image'
            live={project.live}
            gitHub={project.github}
            process={project.process}
            icons={project.icons}
            tech={project.technologies}
            pathName={project.pathName}
          />
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}

export default Projects;
