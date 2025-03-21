import Project from "./components/Project";
import { useEffect, useState } from "react";

function Projects() {
  const [projectData, setProjectData] = useState([]);

  const apiQueryURL =
    "https://aur0cyqw.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22project%22%5D+%7C+order%28projctOrder+asc%29";

  useEffect(() => {
    fetch(apiQueryURL)
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.result);
      });
  }, [apiQueryURL]);

  return (
    <div className='w-11/12 lg:w-2/3  mb-0 mt-4 mx-auto' id='projects'>
      <h2 className='font-light text-2xl md:text-3xl lg:text-4xl'>Projects</h2>
      <div className='bg-gray-400 h-[1px] w-full md:w-1/3 mt-1 mb-4'></div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
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
    </div>
  );
}

export default Projects;
