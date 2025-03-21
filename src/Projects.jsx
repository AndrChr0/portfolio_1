import Nav from "./components/Nav";
// ttt
function Projects() {
  return (
    <main>
      <h1 tabIndex={0} className='text-5xl font-bold pt-4'>
        Projects
      </h1>
      <div className='project-container'>
        <div className='project-card'>
          <div className='project-left'>
            <h2 tabIndex={0} className='font-semibold text-4xl'>
              Scrollytelling - Deforestation
            </h2>
            <img
              tabIndex={0}
              src='./scrolly-telling.png'
              alt="a forest from above, with the title 'Deforestation' in fron of it"
            />
          </div>

          <div className='project-right'>
            <p tabIndex={0}>
              With the goal of telling a story using CSS, HTML, and minimal
              JavaScript, another student and I created a scrollytelling site
              focused on the effects of deforestation. We split the page in two,
              with a forest on the left and a city on the right, to show how the
              growth of society affects the rainforests. We employed Sass to
              utilize more advanced CSS functionalities and the Intersection
              Observer API to create dynamic changes as the user scrolls.
            </p>
            <div className='project-links'>
              <a
                className='underline'
                target='_blank'
                href='https://advancedcss2023.github.io/assignment-3--scrollytelling-group_4/'
              >
                Live
              </a>
              <a
                className='underline'
                target='_blank'
                href='https://github.com/AndrChr0/assignment-3--scrollytelling-group_4'
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='project-left'>
            <h2 tabIndex={0} className='font-semibold text-4xl'>
              Fully Accessible website
            </h2>
            <img
              tabIndex={0}
              src='./climbing-wall-project.png'
              alt='The Gjøvik Climbing wall homepage, with different text and images detailing the climbing facilities'
            />
          </div>

          <div className='project-right'>
            <p tabIndex={0}>
              For our course in web accessibility, I created an informative
              website for the Fjellhallen climbing wall that is accessible to
              users with both visual and auditory impairments. Through this
              project, I gained a deep understanding of the{" "}
              <abbr title='Web Content Accessibility Guidelines'>WCAG</abbr> 2.1
              guidelines and how to apply them effectively to such a project.
              Additionally, I gained direct insight into what it is like to
              navigate the web as a user with disabilities.
            </p>
            <div className='project-links'>
              <a
                className='underline'
                target='_blank'
                href='https://andrchr0.github.io/fjellhallen-climbing-wall-project/'
              >
                Live
              </a>
              <a
                className='underline'
                target='_blank'
                href='https://github.com/AndrChr0/fjellhallen-climbing-wall-project'
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='project-left'>
            <h2 tabIndex={0} className='font-semibold text-4xl'>
              Darling Student Union Website
            </h2>
            <img
              tabIndex={0}
              src='./darling.png'
              alt='The homepage of the Darling student Union homepage with images of students doing different activities'
            />
          </div>

          <div className='project-right'>
            <p tabIndex={0}>
              As the project leader for the Darling Student Union website, I
              gained substantial experience in team-based web development. I
              oversaw the project from its initial ideation and design through
              to the deployment of the actual site. We built the site using
              Vue.js and Tailwind. It is integrated with Sanity CMS to allow
              members of the organization to edit the site's content freely
              without much technical knowledge.
            </p>
            <div className='project-links'>
              <a
                target='_blank'
                href='https://www.darlinglinjeforening.org/'
                className='underline'
              >
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
