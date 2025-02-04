import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import { useEffect, useState } from "react";

function Home() {
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
    <>
      <main className='bg-black text-white'>
        <Hero />
        <About />
        {projectData ? (
          projectData.map((project) => (
            <Project
              key={project._id}
              header={project.title}
              text={project.mainText}
              mainImg={project.mainImage.asset._ref}
              mainImgAlt='Project Image'
              live={project.live}
              gitHub={project.gitHub}
              process={project.process}
              icons={project.icons}
              tech={project.technologies}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}
        {/* <Project
          header='My Project'
          text='This is a description of my project.'
          mainImg='path/to/image.jpg'
          mainImgAlt='Project Image'
          live='http://liveproject.com'
          gitHub='github.com/project'
          process='http://process.com'
          // icons={projectData.icons}
        /> */}
      </main>
    </>
  );
}

export default Home;
