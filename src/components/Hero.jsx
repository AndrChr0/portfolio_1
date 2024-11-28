import React from "react";

function Hero() {
  return (
    <>
      <div className='relative pb-4 md:pb-[5dvh] pt-4 lg:pt-0'>
        <div
          tabIndex={0}
          className='absolute z-10 text-white lg:top-[17dvh] ml-4'
        >
          <h1 className='font-bold text-4xl lg:text-7xl'>
            Andreas Christiansen
          </h1>
          <p className='text-3xl'>Web Developer</p>
        </div>
        <div className='relative '>
          <video
            className='w-full h-full object-cover'
            muted
            autoPlay
            loop
            preload='auto'
            src={"/portfolio_hero_vid.mp4"}
          ></video>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20'></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
