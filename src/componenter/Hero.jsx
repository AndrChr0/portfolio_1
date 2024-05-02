import React from "react";

function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>Andreas Christiansen</h1>
          <p className="heading-sub-text">Wed developer</p>
        </div>
        <div className="hero-right">
          <img
            className="portrait"
            src="./portrait.jpg"
            alt="Andreas chilling with a hansome bunny"
          />
        </div>
      </div>
      <img className="bird-svg" src="./bird-svgrepo-com.svg" alt="an outline of a bird" />

    </>
  );
}

export default Hero;
