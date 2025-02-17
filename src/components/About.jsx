import Skills from "./Skills";

function About() {
  return (
    <div >
      <div
        id='about'
        tabIndex={0}
        className='w-11/12 h-1/2 lg:h-1/3 md:w-9/12 lg:w-2/3 my-0 mx-auto pt-4'
      >
        <h2 className='font-light text-2xl md:text-3xl lg:text-4xl'>
          About Me
        </h2>
        <div className='bg-gray-400 h-[1px] w-full md:w-1/3 mt-1'></div>
        <p className='pt-4 pl-2 my-0 mx-auto md:pl-4 font-light text-lg md:text-2xl lg:text-2xl leading-normal max-w-[70ch]'>
          I am currently completing my third year at NTNU Gjøvik, where I am
          pursuing a{" "}
          <a
            className='underline'
            target='_blank'
            href='https://www.ntnu.no/studier/bwu'
          >
            bachelor's degree in Web Development
          </a>
          . Through my studies, I have gained a comprehensive understanding of
          the fundamental web technologies. Outside of school, I am an avid
          climber and an active member in various student unions.
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default About;
