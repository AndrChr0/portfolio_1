function Skills() {
  return (
    <div className='w-11/12 lg:w-1/2 h-1/2 mx-auto my-0 flex flex-col justify-center pb-8 pt-4'>
      <div className='h-full grid grid-cols-3 grid-rows-4 lg:grid-rows-4 lg:grid-cols-4 gap-y-2 lg:gap-y-20 justify-items-center px-8 '>
        {[
          {
            src: "./icons/js.svg",
            alt: "JavaScript icon",
            label: "JavaScript",
          },
          { src: "./icons/html5.svg", alt: "HTML5 icon", label: "HTML" },
          { src: "./icons/w3_css-icon.svg", alt: "CSS3 icon", label: "CSS" },
          { src: "./icons/react.svg", alt: "React icon", label: "React" },
          { src: "./icons/sass.svg", alt: "Sass icon", label: "Sass" },
          { src: "./icons/docker.svg", alt: "Docker icon", label: "Docker" },
          { src: "./icons/MDB.svg", alt: "MongoDB icon", label: "MongoDB" },
          {
            src: "./icons/database-solid.svg",
            alt: "MySQL icon",
            label: "MySQL",
          },
          { src: "./icons/node.svg", alt: "Node icon", label: "Node" },
          {
            src: "./icons/tailwind.png",
            alt: "Tailwind icon",
            label: "Tailwind",
          },
          { src: "./icons/figma-logo.svg", alt: "Figma icon", label: "Figma" },
          {
            src: "./icons/typescript.svg",
            alt: "TS icon",
            label: "TypeScript",
          },
        ].map((skill, index) => (
          <div key={index} className='w-14 md:w-16 relative group'>
            <img
              className='h-14 md:h-20 transition-transform duration-300 invert'
              tabIndex={0}
              src={skill.src}
              alt={skill.alt}
            />
            <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
