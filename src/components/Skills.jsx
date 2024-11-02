function Skills() {
  return (
    <div>
      {/* <h2 className='font-semibold text-3xl'>Skills</h2> */}
      <div className='skills-container'>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/js.svg' alt='JavaScript icon' />
          <span className='tooltip'>JavaScript</span>
        </div>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/html5.svg' alt='HTML5 icon' />
          <span className='tooltip'>HTML</span>
        </div>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/css3-alt.svg' alt='CSS3 icon' />
          <span className='tooltip'>CSS</span>
        </div>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/react.svg' alt='React icon' />
          <span className='tooltip'>React</span>
        </div>
        {/* <div className='skill-item'>
          <img tabIndex={0} src='./icons/vuejs.svg' alt='Vue.js icon' />
          <span className='tooltip'>Vue.js</span>
        </div> */}
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/sass.svg' alt='Sass icon' />
          <span className='tooltip'>Sass</span>
        </div>
        {/* <div className='skill-item'>
          <img tabIndex={0} src='./icons/php.svg' alt='PHP icon' />
          <span className='tooltip'>PHP</span>
        </div> */}
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/docker.svg' alt='Docker icon' />
          <span className='tooltip'>Docker</span>
        </div>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/MDB.svg' alt='MongoDB icon' />
          <span className='tooltip'>MongoDB</span>
        </div>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/database-solid.svg' alt='MySQL icon' />
          <span className='tooltip'>MySQL</span>
        </div>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/node.svg' alt='Node icon' />
          <span className='tooltip'>Node</span>
        </div>
        <div className='skill-item'>
          <img tabIndex={0} src='./icons/tailwind.png' alt='Tailwind icon' />
          <span className='tooltip'>Tailwind</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
