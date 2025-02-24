import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { urlFor } from "./main";

function Process() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const pathname = location.pathname.split("/")[1];

  useEffect(() => {
    fetch(
      `https://aur0cyqw.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27project%27+%26%26+pathName+%3D%3D+%22${pathname}%22%5D`
    )
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.result[0]);
        setLoading(false);
      });
  }, [pathname]);

  console.log(projectData);

  return (
    <div className='bg-black text-white'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link to='/' className='underline hover:text-slate-200'>
            ← Home
          </Link>
          <h1 className='text-5xl font-bold pt-4'>{projectData.title}</h1>
          <p className='px-2 py-4'>{projectData.mainText}</p>
          <img
            src={urlFor(projectData.mainImage.asset._ref)}
            alt={projectData.mainImageAlt}
          />

          <h2 className='text-2xl font-bold tracking-tight pt-2'>
            My contributions
          </h2>
          <p className='px-2'>{projectData.contributionText}</p>

          <h2 className='text-2xl font-bold pt-2'>Project Credit</h2>
          <ul className='px-2'>
            {projectData.contributors.map((contributor) =>
              contributor.contributorPortfolio ? (
                <li key={contributor._key}>
                  <a
                    href={contributor.contributorPortfolio}
                    target='_blank'
                    rel='noreferrer'
                    className='underline hover:text-slate-200'
                  >
                    {contributor.contributorName}
                  </a>
                </li>
              ) : (
                <li key={contributor._key}>{contributor.contributorName}</li>
              )
            )}
          </ul>

          <div>
            <h3 className='text-xl font-normal pt-2'>
              {projectData.processSection[0].stepTitle}
            </h3>
            <div className='flex flex-col md:flex-row'>
              <img
                className='md:w-1/2'
                src={urlFor(projectData.processSection[0].stepImage.asset._ref)}
                alt={projectData.processSection[0].stepImageAltText}
              />
              <p className='px-2 pt-2'>
                {projectData.processSection[0].stepText}
              </p>
            </div>
            <h3 className='text-xl font-normal pt-2'>
              {projectData.processSection[1].stepTitle}
            </h3>
            <div className='flex flex-col md:flex-row-reverse'>
              <img
                className='md:w-1/2'
                src={urlFor(projectData.processSection[1].stepImage.asset._ref)}
                alt={projectData.processSection[1].stepImageAltText}
              />
              <p className='px-2 pt-2'>
                {projectData.processSection[1].stepText}
              </p>
            </div>
            <h3 className='text-xl font-normal pt-2'>
              {projectData.processSection[2].stepTitle}
            </h3>
            <div className='flex flex-col md:flex-row md:item-center'>
              <img
                className='md:w-1/2'
                src={urlFor(projectData.processSection[2].stepImage.asset._ref)}
                alt={projectData.processSection[2].stepImageAltText}
              />
              <p className='px-2 pt-2'>
                {projectData.processSection[2].stepText}
              </p>
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-6 pt-4'>
            {projectData.technologies.map((technology) => (
              <div key={technology._key} className='flex flex-col items-center'>
                <img
                  src={urlFor(technology.image.asset._ref)}
                  alt={technology.name}
                  className='w-12 h-12 object-contain mb-2 invert'
                />
                <span className='text-sm'>{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Process;
