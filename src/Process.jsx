import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { urlFor } from "./main";
// import ImageSlideshow from "./components/ImageSlideShow";
import ImageSlideshow from "./components/ImageSlideshow";

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
  // SLIDESHOW
  // https://v0.dev/chat/image-slideshow-script-QGZOunmqzWq
  return (
    <div className='bg-black text-white w-11/12 lg:w-2/3 mx-auto mt-4 mb-0'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link to='/' className='underline hover:text-slate-200'>
            ← Home
          </Link>
          <h1 className='text-5xl font-light pt-4'>{projectData.title}</h1>

          {/* <div className='flex flex-col md:flex-row md:gap-6'> */}
          <p className='px-2 py-4 text-xl font-light max-w-[75ch]'>
            {projectData.mainText}
          </p>

          {/* </div> */}

          {/* <img
            src={urlFor(projectData.mainImage.asset._ref)}
            alt={projectData.mainImageAlt}
          /> */}

          <ImageSlideshow
            slides={projectData.slideshowContent}
            interval={7000}
          />
          <div className='pt-10 flex flex-col justify-center items-start md:flex-row md:items-end gap-6'>
            <p className='text-xl font-extralight tracking-tight'>Made With:</p>
            <div className='flex flex-wrap justify-center gap-6 '>
              {projectData.technologies.map((technology) => (
                <div
                  key={technology._key}
                  className='flex flex-col items-center'
                >
                  <img
                    src={urlFor(technology.image.asset._ref)}
                    alt={technology.name}
                    className='w-8 h-8 object-contain mb-2 invert'
                  />
                  <span className='text-sm'>{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-6 pt-10 pb-20'>
            {projectData.contributionText && (
              <div className='w-full'>
                <h2 className='text-4xl font-light tracking-tight pt-2'>
                  My contributions
                </h2>
                <p className='px-2 text-lg font-light'>
                  {projectData.contributionText}
                </p>
              </div>
            )}
            <div className='w-full'>
              <h2 className='text-4xl font-light pt-2'>Project Credit</h2>
              <ul className='px-2 text-lg font-light'>
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
                    <li key={contributor._key}>
                      {contributor.contributorName}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className='flex flex-col gap-14'>
            <div className='flex flex-col gap-4 md:flex-row'>
              <img
                className='w-full h-auto object-cover md:w-1/2'
                src={urlFor(projectData.processSection[0].stepImage.asset._ref)}
                alt={projectData.processSection[0].stepImageAltText}
              />
              <div>
                <h3 className='text-3xl font-light'>
                  {projectData.processSection[0].stepTitle}
                </h3>
                <p className='px-2 pt-2 text-xl font-light md:px-0'>
                  {projectData.processSection[0].stepText}
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-4 md:flex-row-reverse'>
              <img
                className='w-full h-auto object-cover md:w-1/2'
                src={urlFor(projectData.processSection[1].stepImage.asset._ref)}
                alt={projectData.processSection[1].stepImageAltText}
              />

              <div>
                <h3 className='text-3xl font-light'>
                  {projectData.processSection[1].stepTitle}
                </h3>
                <p className='px-2 pt-2 text-xl font-light md:px-0'>
                  {projectData.processSection[1].stepText}
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-4 md:flex-row md:item-center'>
              <img
                className='w-full h-auto object-cover md:w-1/2'
                src={urlFor(projectData.processSection[2].stepImage.asset._ref)}
                alt={projectData.processSection[2].stepImageAltText}
              />
              <div>
                <h3 className='text-3xl font-light'>
                  {projectData.processSection[2].stepTitle}
                </h3>
                <p className='px-2 pt-2 text-xl font-light md:px-0'>
                  {projectData.processSection[2].stepText}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Process;
