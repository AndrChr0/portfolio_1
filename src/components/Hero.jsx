import React from "react";

function Hero() {
  return (
    <>
      <div className='hero-wrapper'>
        <div tabIndex={0}>
          <h1 className='font-bold text-5xl lg:text-7xl'>
            Andreas Christiansen
          </h1>
          <p>Web Developer</p>
        </div>
        <div className='hero-right'>
          <img
            tabIndex={0}
            className='portrait'
            src='./portrait.jpg'
            alt='Andreas chilling with a hansome bunny'
          />
        </div>
      </div>
      <img
        className='bird-svg'
        src='./bird-svgrepo-com.svg'
        alt='an outline of a bird'
      />
    </>
  );
}

export default Hero;
