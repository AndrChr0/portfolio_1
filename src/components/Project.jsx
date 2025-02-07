import { urlFor } from "../main";
import { Link } from "react-router-dom";

function Project({
  header,
  text,
  mainImg,
  mainImgAlt,
  live,
  gitHub,
  process,
  tech,
  pathName,
}) {
  console.log(gitHub);
  // icons
  return (
    <div className='bg-black flex flex-col justify-center mx-auto my-0 gap-4 py-8'>
      <h2 className='text-2xl font-light'>{header}</h2>
      <p className='max-w-[70ch] md:pl-4 md:text-xl font-extralight'>{text}</p>
      <img
        src={urlFor(mainImg)}
        alt={mainImgAlt}
        className='md:w-3/4 mx-auto my-0'
      />
      <div className='underline flex justify-center gap-4'>
        {live ? (
          <a href={live} target='_blank' rel='noreferrer'>
            Live
          </a>
        ) : null}
        {gitHub ? (
          <a href={gitHub} target='_blank' rel='noreferrer'>
            GitHub
          </a>
        ) : null}
        {pathName ? (
          <Link to={`/${pathName}`} className='underline'>
            Process
          </Link>
        ) : null}
      </div>

      <div className='flex justify-center gap-4'>
        {tech.map((technology) => (
          <div key={technology._key} className='flex flex-col items-center'>
            <img
              src={urlFor(technology.image.asset._ref)}
              alt={technology.name}
              className='w-12 h-12 invert'
            />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
      <div className='bg-white py-[1px] w-2/3 flex my-0 mx-auto'></div>
    </div>
  );
}

export default Project;
