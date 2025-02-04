import { urlFor } from "../main";

function Project({
  header,
  text,
  mainImg,
  mainImgAlt,
  live,
  gitHub,
  process,
  tech,
}) {
  // icons
  return (
    <div className='bg-black flex flex-col items-center justify-center w-11/12  mx-auto my-0 '>
      <h2>{header}</h2>
      {/* <p>{text}</p> */}
      <img src={urlFor(mainImg)} alt={mainImgAlt} />
      <div>
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
        {process
          ? -(
              <a href={process} target='_blank' rel='noreferrer'>
                Process
              </a>
            )
          : null}
      </div>

      <div className='flex justify-center gap-4 py-4'>
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
    </div>
  );
}

export default Project;
