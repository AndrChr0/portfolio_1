

// function Skills() {
//   return (
//     <div>
//       <h2>Skills</h2>
// <div className="skills-container">
// <img src="../../public/icons/js.svg" alt="JavaScript icon" />
// <img src="../../public/icons/html5.svg" alt="HTML5 icon" />
// <img src="../../public/icons/css3-alt.svg" alt="CSS3 icon" />
// <img src="../../public/icons/react.svg" alt="React icon" />
// <img src="../../public/icons/vuejs.svg" alt="Vue.js icon" />

// <img src="../../public/icons/sass.svg" alt="Sass icon" />
// <img src="../../public/icons/php.svg" alt="PHP icon" />
// <img src="../../public/icons/github.svg" alt="GitHub icon" />
// <img src="../../public/icons/jest.png" alt="Jest icon" />
// <img src="../../public/icons/docker.svg" alt="Docker icon" />
// <img src="../../public/icons/MDB.svg" alt="MongoDB icon" />
// <img src="../../public/icons/database-solid.svg" alt="MySQL icon" />
// <img src="../../public/icons/node.svg" alt="Node icon" />
// <img src="../../public/icons/tailwind.png" alt="Tailwind icon" />



// </div>
//     </div>
//   );
// }
function Skills() {
    return (
      <div>
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <img src="../../public/icons/js.svg" alt="JavaScript icon" />
            <span className="tooltip">JavaScript</span>
          </div>
          <div className="skill-item">
            <img src="../../public/icons/html5.svg" alt="HTML5 icon" />
            <span className="tooltip">HTML5</span>
          </div>
          <div className="skill-item">
            <img src="../../public/icons/css3-alt.svg" alt="CSS3 icon" />
            <span className="tooltip">CSS3</span>
          </div>
          <div className="skill-item">
            <img src="../../public/icons/react.svg" alt="React icon" />
            <span className="tooltip">React</span>
          </div>
          <div className="skill-item">
            <img src="../../public/icons/vuejs.svg" alt="Vue.js icon" />
            <span className="tooltip">Vue.js</span>
          </div>
          <div className="skill-item">
            <img src="../../public/icons/sass.svg" alt="Sass icon" />
            <span className="tooltip">Sass</span>
          </div>
            <div className="skill-item">
                <img src="../../public/icons/php.svg" alt="PHP icon" />
                <span className="tooltip">PHP</span>
            </div>
            {/* <div className="skill-item">
                <img src="../../public/icons/github.svg" alt="GitHub icon" />
                <span className="tooltip">GitHub</span>
            </div> */}
            {/* <div className="skill-item">
                <img src="../../public/icons/jest.png" alt="Jest icon" />
                <span className="tooltip">Jest</span>
            </div> */}
            <div className="skill-item">
                <img src="../../public/icons/docker.svg" alt="Docker icon" />
                <span className="tooltip">Docker</span>
            </div>
            <div className="skill-item">
                <img src="../../public/icons/MDB.svg" alt="MongoDB icon" />
                <span className="tooltip">MongoDB</span>
            </div>
            <div className="skill-item">
                <img src="../../public/icons/database-solid.svg" alt="MySQL icon" />
                <span className="tooltip">MySQL</span>
            </div>
            <div className="skill-item">
                <img src="../../public/icons/node.svg" alt="Node icon" />
                <span className="tooltip">Node</span>
            </div>
            <div className="skill-item">
                <img src="../../public/icons/tailwind.png" alt="Tailwind icon" />
                <span className="tooltip">Tailwind</span>
            </div>
        
        </div>
      </div>
    );
  }
  

export default Skills;