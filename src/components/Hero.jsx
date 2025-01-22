import React from "react";

function Hero() {
  return (
    <div className=''>
      <video
        src='/portfolio_hero_vid.mp4'
        className='h-screen'
        autoPlay
        loop
        muted
      ></video>
      <div tabIndex={0}>
        <h1 className=''>Andreas Christiansen</h1>
        <p>Web Developer</p>
      </div>
    </div>
  );
}

export default Hero;
