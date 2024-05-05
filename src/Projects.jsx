import Nav from "./componenter/Nav";

function Projects() {
  return (
    <main>
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <div className="project-left">
            <h2>Scrollytelling - Deforestation</h2>
            <img src="./scrolly-telling.png" alt="" />
          </div>

          <div className="project-right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              distinctio nemo dolor maxime, voluptate delectus esse soluta? Illo
              doloremque quia quis non laboriosam unde sint! Eius excepturi
              nesciunt sint accusamus dicta, fugit aspernatur ut a,
              necessitatibus voluptate vitae commodi ratione nemo soluta? Quod
              ipsam suscipit repellendus deserunt, quis praesentium laudantium
              officiis
            </p>
            <div className="project-links">
              <a
                target="_blank"
                href="https://advancedcss2023.github.io/assignment-3--scrollytelling-group_4/"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/AndrChr0/assignment-3--scrollytelling-group_4"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-left">
            <h2>Fully Accessible website</h2>
            <img src="./climbing-wall-project.png" alt="" />
          </div>

          <div className="project-right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              distinctio nemo dolor maxime, voluptate delectus esse soluta? Illo
              doloremque quia quis non laboriosam unde sint! Eius excepturi
              nesciunt sint accusamus dicta, fugit aspernatur ut a,
              necessitatibus voluptate vitae commodi ratione nemo soluta? Quod
              ipsam suscipit repellendus deserunt, quis praesentium laudantium
              officiis
            </p>
            <div className="project-links">
              <a
                target="_blank"
                href="https://andrchr0.github.io/fjellhallen-climbing-wall-project/"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/AndrChr0/fjellhallen-climbing-wall-project"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-left">
            <h2>Darling Student Union Website</h2>
            <img src="./darling.png" alt="" />
          </div>

          <div className="project-right">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              distinctio nemo dolor maxime, voluptate delectus esse soluta? Illo
              doloremque quia quis non laboriosam unde sint! Eius excepturi
              nesciunt sint accusamus dicta, fugit aspernatur ut a,
              necessitatibus voluptate vitae commodi ratione nemo soluta? Quod
              ipsam suscipit repellendus deserunt, quis praesentium laudantium
              officiis
            </p>
            <div className="project-links">
              <a target="_blank" href="https://www.darlinglinjeforening.org/">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
