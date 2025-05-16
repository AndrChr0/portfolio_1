import { urlFor } from "../main";
import { Link } from "react-router-dom";
import "../project.css";

function Project({
  header,
  text,
  mainImg,
  mainImgAlt,
  live,
  gitHub,
  tech,
  pathName,
}) {
  return (
    <div className='mx-auto max-w-xl bg-neutral-950 border-slate-900 mb-6'>
      <div className='md:flex-shrink-0'>
        <img
          src={urlFor(mainImg)}
          alt={mainImgAlt}
          className='w-full object-cover h-64'
        />
      </div>

      <div className='px-4 py-4 '>
        <h2 className='text-2xl font-bold tracking-tight mb-3'>{header}</h2>

        <p className='text-base font-light mb-4'>{text}</p>

        <div className='flex justify-between items-center mb-6'>
          <div className='flex gap-4'>
            {live && (
              <a
                href={live}
                target='_blank'
                rel='noreferrer'
                className=' hover:text-gray-200 underline'
              >
                Live
              </a>
            )}
            {gitHub && (
              <a
                href={gitHub}
                target='_blank'
                rel='noreferrer'
                className='hover:text-gray-200 underline'
              >
                GitHub
              </a>
            )}
          </div>

          {pathName && (
            <Link
              to={`/${pathName}`}
              className=' hover:text-gray-200 underline'
            >
              Read More →
            </Link>
          )}
        </div>

        <div className='border-t pt-4'>
          <div className='flex flex-wrap justify-center gap-6'>
            {tech.map((technology) => (
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
      </div>
    </div>
  );
}

export default Project;
