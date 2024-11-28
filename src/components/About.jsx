function About() {
  return (
    <div tabIndex={0} className='about-container'>
      <h2 className='font-semibold text-3xl'>About</h2>
      <p>
        I am currently completing my third year at NTNU Gjøvik, where I am
        pursuing a{" "}
        <a target='_blank' href='https://www.ntnu.no/studier/bwu'>
          bachelor's degree in Web Development
        </a>
        . Through my studies, I have gained a comprehensive understanding of the
        fundamental web technologies, including HTML, CSS, and JavaScript.
        Additionally, I have familiarized myself with tools such as PHP, Vue.js,
        React, Docker, and methods such as GitHub Actions, and automated
        testing. Outside of school, I am an avid climber and an active member in
        various student unions.
      </p>
    </div>
  );
}

export default About;
