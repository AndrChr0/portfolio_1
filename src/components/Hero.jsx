
function Hero() {
  return (
    <div className='relative'>
      <video
        src='/portfolio_hero_vid.mp4'
        className='max-w-none h-screen translate-x-[-50%] md:w-screen object-cover md:translate-x-0'
        autoPlay
        loop
        muted
      ></video>
      <div className='absolute top-0 h-screen w-full bg-[rgba(0,0,0,.75)]'></div>
      <div className='w-[90dvw] flex flex-col absolute top-1/4 md:top-1/3 left-1/2 transform -translate-x-1/2 lg:w-[70dvw]'>
        <div className='pl-2'>
          <h1 className='text-5xl md:text-8xl font-thin'>
            Andreas Christiansen
          </h1>
          <p className='pl-4 text-xl md:text-2xl'> <span className="font-light">Full-stack</span> Web Developer</p>
        </div>

        <div className='flex flex-col pt-8 gap-1 underline pl-12 font-extralight text-2xl w-10'>
          <a
            className='hover:font-normal'
            href='https://github.com/AndrChr0'
            target='_blank'
          >
            GitHub
          </a>
          <a
            className='hover:font-normal'
            href='https://www.linkedin.com/in/andreas-christiansen-460824271/'
            target='_blank'
          >
            LinkedIn
          </a>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 pt-24 text-2xl md:text-4xl font-light '>
        <a
            className='text-center py-2 px-2 bg-[rgba(0,0,0,.3)] hover:font-normal md:bg-[rgba(0,0,0,.0)] md: w-52'
            href='#projects'
          >
            Projects
          </a>
          <a
            className='text-center py-2 px-2 bg-[rgba(0,0,0,.3)] hover:font-normal md:bg-[rgba(0,0,0,.0)] md: w-52'
            href='#about'
          >
            About Me
          </a>
        
        </div>
      </div>
    </div>
  );
}

export default Hero;
